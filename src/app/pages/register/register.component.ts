import {Component, OnInit} from '@angular/core';
import {Passenger, initialPassenger} from "../../bom/party/passenger.model";
import {Router} from "@angular/router";
import {RegistrationService} from "../../services/passenger-registration.service";
import {EventService} from "../../services/events.service";
import {Person} from "../../bom/party/person.model";
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterPassengerComponent implements OnInit {

  private passenger: Passenger;
  private errorMessage: string;

  constructor(private router: Router,
              private registrationService: RegistrationService,
              private _eventService: EventService) {
  }

  ngOnInit() {
    this.passenger = initialPassenger;
  }

  submit() {
    console.log(this.passenger);

    if (!this.passenger) {
      return;
    }

    // momentjs stuff
    if ((<Person>this.passenger.party).birthday) {
      (<Person>this.passenger.party).birthday = moment((<Person>this.passenger.party).birthday);
    }
    moment.fn.toJSON = function () {
      return this.format("YYYY-MM-DD");
    };

    //TODO start: Delete this as soon as backend is ready
    this._eventService.register(this.passenger);
    this.router.navigate(['/complete']);
    //TODO end:   Delete this as soon as backend is ready

    // Call backend via REST
    this.registrationService.register(this.passenger)
      .subscribe(
        passenger => {
          this.passenger = passenger;
          console.log(`response passenger: ${passenger}`);

          // Inform other components about successful registration
          this._eventService.register(this.passenger);

          // Redirect user to complete page
          this.router.navigate(['/complete']);
        },
        error => this.errorMessage = <any>error);
  }
}
