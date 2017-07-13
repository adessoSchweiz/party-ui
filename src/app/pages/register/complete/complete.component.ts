import {Component, OnDestroy, OnInit} from '@angular/core';
import {Passenger} from "../../../bom/party/passenger.model";
import {EventService} from "../../../services/events.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html'
})
export class CompleteComponent implements OnInit, OnDestroy {

  private passenger: Passenger;
  private subscription: Subscription;

  constructor(private _eventService: EventService) {
  }

  ngOnInit() {
    this.subscription = this._eventService.passengerLoggedInOrRegistered$.subscribe(passenger => this.passenger = passenger);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
