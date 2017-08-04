import {Contact} from './contact.model';


export abstract class Party {

  contacts: Contact[];

  constructor(contacts: Contact[]) {
    this.contacts = contacts;
  }
}
