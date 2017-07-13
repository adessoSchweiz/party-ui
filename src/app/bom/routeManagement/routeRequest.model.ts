/**
 * Created by sascha.ruesing on 22.06.2017.
 */
import {CarType} from "./carType";
import {LatitudeLongitude} from "./latitudeLongitude.model";

export class RouteRequest {

  private id: number;
  private passengerId: number;
  private from: LatitudeLongitude;
  private to: LatitudeLongitude;
  private noOfPersons: number;
  private carType: CarType;
  private passengerComment: string;

  private estimatedTime: any;
  private estimatedDistance: any;

  constructor(id: number, passengerId: number, from: LatitudeLongitude, to: LatitudeLongitude, noOfPersons: number, carType: CarType, passengerComment:string, estimatedTime: any, estimatedDistance: any) {
    this.id = id;
    this.passengerId = passengerId;
    this.from = from;
    this.to = to;
    this.noOfPersons = noOfPersons;
    this.carType = carType;
    this.passengerComment = passengerComment;
    this.estimatedTime = estimatedTime;
    this.estimatedDistance = estimatedDistance;
  }
}
