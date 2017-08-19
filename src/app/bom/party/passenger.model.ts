import {PartyRole} from './partyRole.model';
import {CreditCard, initialCreditCard} from './creditCard.model';
import {Person, initialPerson} from './person.model';

export class Passenger extends PartyRole {

  type: string;
  creditCard: CreditCard;

  constructor(id: string, creditCard: CreditCard) {
    super(id);
    this.creditCard = creditCard;
  }
}

export const initialPassenger: Passenger = {
  type: 'passenger',
  id: '',
  creditCard: initialCreditCard
};
