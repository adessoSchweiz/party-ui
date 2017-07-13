import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Passenger} from "../bom/party/passenger.model";
import {EventService} from "../services/events.service";
import {Subscription} from "rxjs/Subscription";
import {SnackBarService} from "../services/snackbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  private loggedInPassenger: Passenger;
  private subscription: Subscription;

  constructor(private router: Router,
              private _eventService: EventService,
              private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    this.subscription = this._eventService.passengerLoggedInOrRegistered$.subscribe(passenger => this.setPassengerAsLoggedInPassenger(passenger));
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  private setPassengerAsLoggedInPassenger(passenger: Passenger) {
    this.loggedInPassenger = passenger;
  }

  private navigateTo(target: string) {
    switch (target) {
      case 'login': {
        this.router.navigate(['/']);
        break;
      }
      case 'logout': {
        this._eventService.logout();
        this.snackBarService.openSnackBar('Successfully logged out');
        this.router.navigate(['/']);
        break;
      }
      case 'register/passenger': {
        this.router.navigate(['/register/passenger']);
        break;
      }
      case 'editProfile': {
        this.router.navigate(['/editProfile']);
        break;
      }
      case 'requestRoute': {
        this.router.navigate(['/requestRoute']);
        break;
      }
      case 'rideHistory': {
        this.router.navigate(['/rideHistory']);
        break;
      }
      default: {
        this.router.navigate(['/']);
        break;
      }
    }
  }
}
