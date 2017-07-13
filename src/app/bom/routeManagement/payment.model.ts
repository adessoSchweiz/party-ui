/**
 * Created by sascha.ruesing on 22.06.2017.
 */
import {RouteAgreement} from "./routeAgreement.model";
import {CreditCard} from "../party/creditCard.model";

export class Payment {

  private id: number;
  private routeAgreement: RouteAgreement;
  private creditCard: CreditCard;

  constructor(id: number, routeAgreement: RouteAgreement, creditCard: CreditCard) {
    this.id = id;
    this.routeAgreement = routeAgreement;
    this.creditCard = creditCard;
  }
}
