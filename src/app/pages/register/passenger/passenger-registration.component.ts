import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../../bom/party/person.model";
import {Passenger} from "../../../bom/party/passenger.model";

@Component({
  selector: 'app-passenger-registration',
  templateUrl: './passenger-registration.component.html',
  styleUrls: ['./passenger-registration.component.css']
})
export class PassengerRegistrationComponent {

  @Input()
  person: Person;

  @Output()
  sendCompleteEvent = new EventEmitter();

  contactTypeEnums = [
    {key: '0', value: "Domicile"},
    {key: '1', value: 'Correspondence'}
  ];

  ccTypeEnums = [
    {key: '0', value: 'MASTER_CARD'},
    {key: '1', value: 'VISA'},
    {key: '2', value: 'AMEX'}
  ];

  constructor() {
  }

  onSubmit() {
    this.sendCompleteEvent.emit();
  }
}
