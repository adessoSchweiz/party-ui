import { PartyRole } from './partyRole.model';
import {initialPerson} from './person.model';
import {Party} from './party.model';

export class Driver extends PartyRole {

  constructor(id: string) {
    super(id);
  }
}
