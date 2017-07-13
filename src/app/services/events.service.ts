/**
 * Created by sascha.ruesing on 07.07.2017.
 */
import {Injectable} from "@angular/core";
import {initialPassenger, Passenger} from "../bom/party/passenger.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class EventService {

  // Observable sources
  private _passengerLoggedInOrRegisteredSource = new BehaviorSubject<Passenger>(initialPassenger);
  private _warningWasSentSource = new BehaviorSubject<string>('');

  // Observable streams
  passengerLoggedInOrRegistered$ = this._passengerLoggedInOrRegisteredSource.asObservable();
  warningWasSent$ = this._warningWasSentSource.asObservable();

  public register(passenger: Passenger) {
    this._passengerLoggedInOrRegisteredSource.next(passenger);
  }

  public logout() {
    this._passengerLoggedInOrRegisteredSource.next(null);
  }

  public login(passenger: Passenger) {
    this._passengerLoggedInOrRegisteredSource.next(passenger);
  }

  public sendWarning(warning: string) {
    this._warningWasSentSource.next(warning);
  }
}
