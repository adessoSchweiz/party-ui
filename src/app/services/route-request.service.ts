/**
 * Created by sascha.ruesing on 22.06.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {RouteRequest} from "../bom/routeManagement/routeRequest.model";

@Injectable()
export class RouteRequestService {

  // Wiki -> ....

  private routeRequestBaseURL = '/route/request/';  // URL to web API

  constructor(private http: Http) {
  }

  requestRoute(routeRequest: RouteRequest): Observable<RouteRequest> {
    let options = new RequestOptions();

    return this.http.post(this.routeRequestBaseURL, {routeRequest}, options)
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
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
