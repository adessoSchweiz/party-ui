import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {EventService} from "../services/events.service";
import {Subscription} from "rxjs/Subscription";
import {Person} from "../bom/party/person.model";

@Injectable()
export class AuthGuard implements CanActivate, OnDestroy {

  private subscription: Subscription;
  private loggedInPassenger: Person;

  constructor(private router: Router,
              private _eventService: EventService) {

    this.subscription = this._eventService.passengerLoggedInOrRegistered$.subscribe(passenger => this.loggedInPassenger = passenger);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  canActivate() {
    
    if(this.loggedInPassenger && this.loggedInPassenger.id) {
      return true;
    }
    
    this.router.navigate(['/']);
    return false;
  }
}
