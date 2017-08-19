import {Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {MapsAPILoader} from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

import {DirectionsMapDirective} from '../../directives/agm-map-directive';
import {} from '@types/googlemaps';

import {RouteRequest} from '../../bom/routeManagement/routeRequest.model';
import {RouteRequestService} from '../../services/route-request.service';
import {Person} from '../../bom/party/person.model';
import {CarType} from '../../bom/routeManagement/carType';
import {LatitudeLongitude} from '../../bom/routeManagement/latitudeLongitude.model';
import {EventService} from '../../services/events.service';
import {Subscription} from 'rxjs/Subscription';
import {SnackBarService} from '../../services/snackbar.service';

declare const google: any;
declare const jQuery: any;

@Component({
  selector: 'app-request-route',
  templateUrl: './request-route.component.html',
  styleUrls: ['./request-route.component.css'],
  providers: [GoogleMapsAPIWrapper]
})
export class RequestRouteComponent implements OnInit, OnDestroy {

  private loggedInPassenger: Person;
  private passengerLoggedInOrRegisteredSubscription: Subscription;

  private latitude: number;
  private longitude: number;
  private zoom: number;
  private iconUrl: string;
  private estimatedTime: any;
  private estimatedDistance: any;

  @ViewChild("pickupInput")
  private pickupInput: ElementRef;

  @ViewChild("dropoffInput")
  private dropoffInput: ElementRef;

  @ViewChild(DirectionsMapDirective)
  private mapDirective: DirectionsMapDirective;

  private routeRequest: RouteRequest;
  private numberOfPersons: number;
  private carType: CarType;
  private passengerComment: string;

  // its a example aleatory position
  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private routeRequestService: RouteRequestService,
              private router: Router,
              private _eventService: EventService,
              private snackBarService: SnackBarService) {
  }

  ngOnInit() {

    // Subscribe for the passenger registration / log in
    this.passengerLoggedInOrRegisteredSubscription = this._eventService.passengerLoggedInOrRegistered$.subscribe((person) => {this.loggedInPassenger = person});

    // Set Google Maps defaults
    this.zoom = 4;
    this.latitude = 47.4192;
    this.longitude = 8.5464;
    this.iconUrl = '../../assets/images/user_on_map.png';

    // Set Route Request Defaults
    this.numberOfPersons = 1;
    this.carType = CarType.STANDARD;

    // Load Autocomplete Places
    this.mapsAPILoader.load().then(() => {
      let autocompletePickup = new google.maps.places.Autocomplete(this.pickupInput.nativeElement, {
        types: []
      });

      let autocompleteDropoff = new google.maps.places.Autocomplete(this.dropoffInput.nativeElement, {
        types: []
      });

      this.setupPlaceChangedListener(autocompletePickup, 'PICKUP');
      this.setupPlaceChangedListener(autocompleteDropoff, 'DROPOFF');
    });

    // Set current user position and fill input of the pickup location
    this.setCurrentPosition();
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.passengerLoggedInOrRegisteredSubscription.unsubscribe();
  }

  private setupPlaceChangedListener(autocomplete: any, mode: any) {
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {

        // Get the place result
        let place: google.maps.places.PlaceResult;
        place = autocomplete.getPlace();

        // Verify result
        if (place.geometry === undefined) {
          return;
        }
        if (mode === 'PICKUP') {
          this.mapDirective.origin = {
            longitude: place.geometry.location.lng(),
            latitude: place.geometry.location.lat()
          };
          this.mapDirective.originPlaceId = place.place_id;
        } else {
          this.mapDirective.destination = {
            longitude: place.geometry.location.lng(),
            latitude: place.geometry.location.lat()
          };
          this.mapDirective.destinationPlaceId = place.place_id;
        }

        if (this.mapDirective.directionsDisplay === undefined) {
          this.mapsAPILoader.load().then(() => {
            this.mapDirective.directionsDisplay = new google.maps.DirectionsRenderer;
          });
        }

        // Update the directions
        this.mapDirective.updateDirections();
        this.zoom = 12;
      });
    });
  }

  public isRoutePicked(): Boolean {
    if (this.mapDirective.originPlaceId && this.mapDirective.destinationPlaceId) {
      return true;
    }
    return false;
  }

  public isRouteValid(): Boolean {
    if (this.mapDirective.estimatedDistance && this.mapDirective.estimatedTime) {
      return true;
    }
    return false;
  }

  public requestRoute() {

    // Get values for RouteRequest
    let from = new LatitudeLongitude(this.mapDirective.origin.latitude, this.mapDirective.origin.longitude);
    let to = new LatitudeLongitude(this.mapDirective.destination.latitude, this.mapDirective.destination.longitude);
    this.estimatedTime = this.mapDirective.estimatedTime;
    this.estimatedDistance = this.mapDirective.estimatedDistance;

    // Build RouteRequest
    this.routeRequest = new RouteRequest(null, this.loggedInPassenger.id, from, to, this.numberOfPersons, this.carType, this.passengerComment, this.estimatedTime, this.estimatedDistance);

    // Call backend via REST
    this.routeRequestService.requestRoute(this.routeRequest)
      .subscribe(
        routeRequest => {
          this.routeRequest = routeRequest;

          // Redirect user to active ride page
          this.router.navigate(['/activeRide']);
        },
        error => this.snackBarService.openSnackBar('There was an unexpected internal server error. Please try again later')
      );
  }

  private setCurrentPosition() {
    // Try HTML5 geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;

        this.mapsAPILoader.load().then(() => {
          let geocoder = new google.maps.Geocoder;
          let latlng = {lat: this.latitude, lng: this.longitude};
          geocoder.geocode({'location': latlng}, function (results, status) {
            if (status.toString() === 'OK') {
              if (results[1]) {
                document.getElementById('pickupInput').setAttribute('value', results[0].formatted_address);
              } else {
                window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
          });
        });
      });
    }
  }
}

// just an interface for type safety
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
