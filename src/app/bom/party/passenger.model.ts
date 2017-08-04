import {PartyRole} from './partyRole.model';
import {CreditCard, initialCreditCard} from './creditCard.model';
import {initialPerson} from './person.model';
import {Party} from './party.model';

export class Passenger extends PartyRole {

  passengerId: string;
  creditCard: CreditCard;

  constructor(passengerId: string, party: Party, login: string, password: string, creditCard: CreditCard) {
    super(party, login, password);
    this.passengerId = passengerId;
    this.creditCard = creditCard;
  }
}

export const initialPassenger: Passenger = {
  passengerId: '',
  party: initialPerson,
  login: '',
  password: '',
  creditCard: initialCreditCard
};
