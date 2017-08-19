/**
 * Created by sascha.ruesing on 10.07.2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Person} from "../bom/party/person.model";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  private loginBaseURL = 'http://localhost:8091/party-service/resources/party/';  // URL to web API

  constructor(private http: Http) {
  }

  login(login: string, password: string): Observable<Person> {
    const options = new RequestOptions();

    return this.http.post(this.loginBaseURL + 'persons/login', {login, password}, options)
      .map(r => JSON.parse(JSON.stringify(r.json())))
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
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
