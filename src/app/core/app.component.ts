import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Person} from "../bom/party/person.model";
import {EventService} from "../services/events.service";
import {Subscription} from "rxjs/Subscription";
import {SnackBarService} from "../services/snackbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  private isLoggedIn = false;
  private login: string = '';
  private subscription: Subscription;

  constructor(private router: Router,
              private _eventService: EventService,
              private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    this.subscription = this._eventService.passengerLoggedInOrRegistered$
                                  .subscribe((person) => this.setPassengerAsLoggedInPassenger(person));
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  private setPassengerAsLoggedInPassenger(person: Person) {
    this.isLoggedIn = person != null && person.id != null && person.id != '';
    if(this.isLoggedIn) {
 	   this.login = person.login;
    } else {
    	this.login = null;
    }
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
      case 'search': {
        this.router.navigate(['/search']);
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
