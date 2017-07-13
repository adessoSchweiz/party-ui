import {CreditCardType} from "./creditCardType";

export class CreditCard {

  id: number;
  cardType: CreditCardType;
  nameOnCard: string;
  cardNumber: string;
  validToMonth: number;
  validToYear: number;
  cardSecretNumber: number;

  constructor(id: number,
              cardType: CreditCardType,
              nameOnCard: string,
              cardNumber: string,
              validToMonth: number,
              validToYear: number,
              cardSecretNumber: number) {

    this.id = id;
    this.cardType = cardType;
    this.nameOnCard = nameOnCard;
    this.cardNumber = cardNumber;
    this.validToMonth = validToMonth;
    this.validToYear = validToYear;
    this.cardSecretNumber = cardSecretNumber;
  }
}

export const initialCreditCard: CreditCard = {
  id: null,
  cardType: CreditCardType.MASTER_CARD,
  nameOnCard: '',
  cardNumber: null,
  validToMonth: 1,
  validToYear: 2020,
  cardSecretNumber: null
};
