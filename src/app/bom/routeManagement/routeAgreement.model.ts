/**
 * Created by sascha.ruesing on 22.06.2017.
 */
import {RouteRequest} from "./routeRequest.model";
import {Driver} from "../party/driver.model";

export class RouteAgreement {

  private id: number;
  private expected_price: number;
  private final_price: number;
  private routeRequest: RouteRequest;
  private driver: Driver;

  constructor(id: number, expected_price: number, final_price: number, routeRequest: RouteRequest, driver: Driver) {
    this.id = id;
    this.expected_price = expected_price;
    this.final_price = final_price;
    this.routeRequest = routeRequest;
    this.driver = driver;
  }
}
