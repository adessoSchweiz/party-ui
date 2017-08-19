import {Contact} from './contact.model';
import {PartyRole} from './partyRole.model';


export abstract class Party {

  id: string;
  version: number;
  partyRoles: PartyRole[];
  contacts: Contact[];

  constructor(id: string, version: number, partyRoles: PartyRole[], contacts: Contact[]) {
    this.id = id;
    this.version = version;
    this.partyRoles = partyRoles;
    this.contacts = contacts;
  }
}
