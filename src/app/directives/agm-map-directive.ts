/**
 * Created by sascha.ruesing on 22.06.2017.
 */
import {Directive, Input} from '@angular/core';
import {GoogleMapsAPIWrapper} from "@agm/core";
import {} from '@types/googlemaps';
import {SnackBarService} from "../services/snackbar.service";

declare const google: any;

@Directive({
  selector: 'agm-map-directions'
})
export class DirectionsMapDirective {

  @Input() origin: any;
  @Input() destination: any;
  @Input() originPlaceId: any;
  @Input() destinationPlaceId: any;
  @Input() directionsDisplay: any;
  @Input() estimatedTime: any;
  @Input() estimatedDistance: any;

  constructor(private gmapsApi: GoogleMapsAPIWrapper,
              private snackBarService: SnackBarService) {
  }

  updateDirections() {
    this.gmapsApi.getNativeMap().then(map => {
      if (!this.originPlaceId || !this.destinationPlaceId) {
        return;
      }

      let directionsService = new google.maps.DirectionsService;
      let me = this;

      //Reset estimated time and distance
      me.estimatedTime = null;
      me.estimatedDistance = null;

      this.directionsDisplay.setMap(map);
      this.directionsDisplay.setOptions({
        polylineOptions: {
          strokeWeight: 8,
          strokeOpacity: 0.7,
          strokeColor: '#00468c'
        }
      });

      this.directionsDisplay.setDirections({routes: []});

      directionsService.route({
        origin: {placeId: this.originPlaceId},
        destination: {placeId: this.destinationPlaceId},
        avoidHighways: false,
        travelMode: 'DRIVING',
        optimizeWaypoints: true

      }, function (response: any, status: any) {
        if (status === 'OK') {
          me.directionsDisplay.setDirections(response);
          map.setZoom(30);
          let point = response.routes[0].legs[0];
          me.estimatedTime = point.duration.text;
          me.estimatedDistance = point.distance.text;
          console.log('Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')');

        } else if (status === 'ZERO_RESULTS') {
          me.snackBarService.openSnackBar('Could not evaluate route. Please enter a valid one');
          console.log('Directions request failed -> No result returned from Google');
        } else {
          console.warn('Directions request failed due to -> ', status);
        }
      });
    });
  }

  private getcomputeDistance(latLngA: any, latLngB: any) {
    return (google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB) / 1000).toFixed(2);
  }
}
