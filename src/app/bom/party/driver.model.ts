import { PartyRole } from './partyRole.model';
import {initialPerson} from './person.model';
import {Party} from './party.model';

export class Driver extends PartyRole {

  driverId: string;


  constructor(driverId: string, party: Party, login: string, password: string) {
    super(party, login, password);
    this.driverId = driverId;
  }
}
