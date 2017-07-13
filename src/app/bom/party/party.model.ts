import {Contact} from "./contact.model";
export abstract class Party {

  id: number;
  contacts: Contact[];

  constructor(id: number, contacts: Contact[]) {
    this.id = id;
    this.contacts = contacts;
  }
}
