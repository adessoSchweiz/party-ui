import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {EventService} from "../services/events.service";
import {Subscription} from "rxjs/Subscription";
import {Passenger} from "../bom/party/passenger.model";

@Injectable()
export class AuthGuard implements CanActivate, OnDestroy {

  private subscription: Subscription;
  private loggedInPassenger: Passenger;

  constructor(private router: Router,
              private _eventService: EventService) {

    this.subscription = this._eventService.passengerLoggedInOrRegistered$.subscribe(passenger => this.loggedInPassenger = passenger);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  canActivate() {
    if (this.loggedInPassenger && this.loggedInPassenger.login) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
