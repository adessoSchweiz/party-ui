import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {PartyRole} from '../bom/party/partyRole.model';

@Injectable()
export class SearchService {

  private searchRequestBaseURL = '/search/';  // URL to web API

  constructor(private http: Http) {
  }

  search(query: string): Observable<PartyRole[]> {
    let options = new RequestOptions();

    return this.http.post(this.searchRequestBaseURL, {query}, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
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
