import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import {PartyRole} from "../../bom/party/partyRole.model";
import {FormControl} from "@angular/forms";
import {SearchService} from "../../services/search.service";
import {SnackBarService} from "../../services/snackbar.service";
import {Passenger} from "../../bom/party/passenger.model";
import {initialCreditCard} from "../../bom/party/creditCard.model";
import {Driver} from "../../bom/party/driver.model";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  displayedColumns = ['id', 'login', 'password'];
  searchDatabase = new SearchDatabase();
  dataSource: SearchDataSource | null;
  searchInput: FormControl;

  constructor(private searchService: SearchService,
              private snackBarService: SnackBarService) {
  }

  ngOnInit() {
    this.dataSource = new SearchDataSource(this.searchDatabase);
    this.searchInput = new FormControl();
    this.searchInput.valueChanges.subscribe(input => this.loadPartyRoles(input));
  }

  private loadPartyRoles(input: string) {

    let foundPartyRoles = new Array<PartyRole>();
    this.searchService.search(input)
      .subscribe(
        partyRoles => {
          foundPartyRoles = partyRoles;
        },
        error => this.snackBarService.openSnackBar('There was an unexpected internal server error. Please try again later')
      );

    //TODO remove.....mocks here
    let partyRole1 = new Passenger(1, null, 'tester1', 'password1', initialCreditCard);
    let partyRole2 = new Passenger(2, null, 'tester2', 'password2', initialCreditCard);
    let partyRole3 = new Driver(3, null, 'tester3', 'password3');
    foundPartyRoles.push(partyRole1);
    foundPartyRoles.push(partyRole2);
    foundPartyRoles.push(partyRole3);
    //TODO remove.....mocks here

    // Truncate database content
    this.searchDatabase.dataChange.next(new Array<PartyRole>());

    // Fill database with results
    for (let partyRole of foundPartyRoles) {
      this.searchDatabase.addPartyRole(partyRole);
    }
  }
}

/** A database that the data source uses to retrieve data for the table. */
export class SearchDatabase {

  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<PartyRole[]> = new BehaviorSubject<PartyRole[]>([]);

  get data(): PartyRole[] {
    return this.dataChange.value;
  }

  constructor() {
  }

  addPartyRole(partyRole: PartyRole) {
    const copiedData = this.data.slice();
    copiedData.push(partyRole);
    this.dataChange.next(copiedData);
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, SearchDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class SearchDataSource extends DataSource<any> {
  constructor(private _searchDatabase: SearchDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PartyRole[]> {
    return this._searchDatabase.dataChange;
  }

  disconnect() {
  }
}
