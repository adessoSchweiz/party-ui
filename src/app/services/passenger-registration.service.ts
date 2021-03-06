import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import {Passenger} from "../bom/party/passenger.model";
import {Person} from "../bom/party/person.model";
import {PartyRole} from "../bom/party/partyRole.model";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/observable/throw';

@Injectable()
export class RegistrationService {

  // Wiki -> PUT - /party/(persons | organisations | roles | contacts | relations | addresses)/id - Die ID's werden in der UI als GUID's generiert
  // (a | b |...) Notaion bedeutet hier, dass eine der Resources "persons", "organisations", usw., zB.: /party/persons/ oder /party/addresses angegeben werden muss.

  private registrationBaseURL = 'http://party-service-myproject.127.0.0.1.nip.io/resources/party/';  // URL to web API

  constructor(private http: Http) {
  }

  register(person: Person): Observable<Person> {
    let options = new RequestOptions();

    return this.http.post(this.registrationBaseURL + 'persons/', person, options)
      .map(r => r.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // TODO impl POST to ElasticSearch -> Error Message --> In Kibana errors can be displayed/analyzed
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(error);
    return Observable.throw(errMsg);
  }
}
