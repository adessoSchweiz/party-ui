import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from "../../../bom/party/person.model";
import {EventService} from "../../../services/events.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html'
})
export class CompleteComponent implements OnInit, OnDestroy {

  private person: Person;
  private subscription: Subscription;

  constructor(private _eventService: EventService) {
  }

  ngOnInit() {
    this.subscription = this._eventService.passengerLoggedInOrRegistered$.subscribe(person => this.person = person);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
