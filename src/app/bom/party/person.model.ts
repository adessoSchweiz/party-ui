import {Party} from './party.model';
import {PartyRole} from './partyRole.model';
import {initialPassenger} from './passenger.model';
import {Contact, initialContacts} from './contact.model';
import {Moment} from 'moment';
import * as moment from 'moment';

export class Person extends Party {

  login: string;
  password: string;
  firstname: string;
  lastname: string;
  birthday: Moment;

  constructor(id: string, version: number,  partyRoles: PartyRole[],contacts: Contact[], login: string, password: string, firstname: string, lastname: string, birthday: Moment) {
    super(id, version, partyRoles, contacts);
    this.login = login;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
  }
}

export const initialPerson: Person = {
  id: '',
  version: 0,
  login: 'login',
  password: 'password',
  partyRoles: [initialPassenger],
  contacts: initialContacts,
  firstname: 'firstname',
  lastname: 'lastname',
  birthday: moment().subtract(18, 'years')
};
