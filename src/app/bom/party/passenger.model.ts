import {PartyRole} from './partyRole.model';
import {CreditCard, initialCreditCard} from './creditCard.model';
import {initialPerson} from './person.model';
import {Party} from './party.model';

export class Passenger extends PartyRole {

  passengerId: string;
  version: number;
  creditCard: CreditCard;

  constructor(passengerId: string, version: number, party: Party, login: string, password: string, creditCard: CreditCard) {
    super(party, login, password);
    this.passengerId = passengerId;
    this.creditCard = creditCard;
    this.version = version;
  }
}

export const initialPassenger: Passenger = {
  passengerId: '',
  party: initialPerson,
  login: '',
  password: '',
  version: 0,
  creditCard: initialCreditCard
};
