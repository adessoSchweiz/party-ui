import {PartyRole} from "./partyRole.model";
import {CreditCard, initialCreditCard} from "./creditCard.model";
import {initialPerson} from "./person.model";
import {Party} from "./party.model";

export class Passenger extends PartyRole {

  creditCard: CreditCard;

  constructor(id: number, party: Party, login: string, password: string, creditCard: CreditCard) {
    super(id, party, login, password);
    this.creditCard = creditCard;
  }
}

export const initialPassenger: Passenger = {
  id: 0,
  party: initialPerson,
  login: '',
  password: '',
  creditCard: initialCreditCard
};
