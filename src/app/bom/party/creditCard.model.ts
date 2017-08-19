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
  nameOnCard: 'name',
  cardNumber: '1111-2222-3333-4444',
  validToMonth: 1,
  validToYear: 2020,
  secretNumber: 123
};
