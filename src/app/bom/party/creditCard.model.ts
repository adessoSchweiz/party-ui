import {CreditCardType} from './creditCardType';

export class CreditCard {

  cardType: CreditCardType;
  nameOnCard: string;
  cardNumber: string;
  validToMonth: number;
  validToYear: number;
  secretNumber: number;

  constructor(
              cardType: CreditCardType,
              nameOnCard: string,
              cardNumber: string,
              validToMonth: number,
              validToYear: number,
              secretNumber: number) {

    this.cardType = cardType;
    this.nameOnCard = nameOnCard;
    this.cardNumber = cardNumber;
    this.validToMonth = validToMonth;
    this.validToYear = validToYear;
    this.secretNumber = secretNumber;
  }
}

export const initialCreditCard: CreditCard = {
  cardType: CreditCardType.MASTER_CARD,
  nameOnCard: '',
  cardNumber: null,
  validToMonth: 1,
  validToYear: 2020,
  secretNumber: null
};
