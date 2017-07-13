import {Party} from "./party.model";
import {Contact, initialContacts} from "./contact.model";
import {Moment} from "moment";
import * as moment from 'moment';

export class Person extends Party {

  firstName: string;
  lastName: string;
  birthday: Moment;

  constructor(id: number, contacts: Contact[], firstName: string, lastName: string, birthday: Moment) {
    super(id, contacts);
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }
}

export const initialPerson: Person = {
  id: 0,
  contacts: initialContacts,
  firstName: '',
  lastName: '',
  birthday: moment().subtract(18, 'years')
};
