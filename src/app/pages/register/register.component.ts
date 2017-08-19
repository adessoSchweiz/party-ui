import {Component, OnInit} from '@angular/core';
import {Passenger, initialPassenger} from "../../bom/party/passenger.model";
import {Router} from "@angular/router";
import {RegistrationService} from "../../services/passenger-registration.service";
import {EventService} from "../../services/events.service";
import {Person, initialPerson} from "../../bom/party/person.model";
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterPassengerComponent implements OnInit {

  private person: Person;
  private errorMessage: string;

  constructor(private router: Router,
              private registrationService: RegistrationService,
              private _eventService: EventService) {
  }

  ngOnInit() {
    this.person = initialPerson;
    console.log(this.person);
  }

  submit() {
    console.log(this.person);

    if (!this.person) {
      return;
    }

    // momentjs stuff
    if (this.person.birthday) {
      this.person.birthday = moment(this.person.birthday);
    }
    moment.fn.toJSON = function () {
      return this.format("YYYY-MM-DD");
    };

    //TODO start: Delete this as soon as backend is ready
   // this._eventService.register(this.passenger);
   // this.router.navigate(['/complete']);
    //TODO end:   Delete this as soon as backend is ready

    // Call backend via REST
    this.registrationService.register(this.person)
      .subscribe(
        (person) => {
          this.person = person;

          // Inform other components about successful registration
          this._eventService.register(this.person);

          // Redirect user to complete page
          this.router.navigate(['/complete']);
        },
        (error) => this.errorMessage = <any>error);
  }
}
