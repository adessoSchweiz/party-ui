import {Party} from './party.model';
import {Contact, initialContacts} from './contact.model';
import {Moment} from 'moment';
import * as moment from 'moment';

export class Person extends Party {

  type: string;
  firstname: string;
  lastname: string;
  birthday: Moment;

  constructor(contacts: Contact[], firstname: string, lastname: string, birthday: Moment) {
    super( contacts);
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
  }
}

export const initialPerson: Person = {
  type: 'person',
  contacts: initialContacts,
  firstname: '',
  lastname: '',
  birthday: moment().subtract(18, 'years')
};
