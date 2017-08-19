/**
 * Created by sascha.ruesing on 07.07.2017.
 */
import {Injectable} from "@angular/core";
import {initialPerson, Person} from "../bom/party/person.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class EventService {

  // Observable sources
  private _passengerLoggedInOrRegisteredSource = new BehaviorSubject<Person>(initialPerson);
  private _warningWasSentSource = new BehaviorSubject<string>('');

  // Observable streams
  passengerLoggedInOrRegistered$ = this._passengerLoggedInOrRegisteredSource.asObservable();
  warningWasSent$ = this._warningWasSentSource.asObservable();

  public register(person: Person) {
    this._passengerLoggedInOrRegisteredSource.next(person);
  }

  public logout() {
    this._passengerLoggedInOrRegisteredSource.next(null);
  }

  public login(person: Person) {
    this._passengerLoggedInOrRegisteredSource.next(person);
  }

  public sendWarning(warning: string) {
    this._warningWasSentSource.next(warning);
  }
}
