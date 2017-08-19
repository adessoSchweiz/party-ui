import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {CdkTableModule} from "@angular/cdk";

import {AppRoutingModule} from './core/app-routing.module';

import {RegistrationService} from "./services/passenger-registration.service";
import {requestOptionsProvider} from "./services/default-request-options.service";

import {AppComponent} from './core/app.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterPassengerComponent} from './pages/register/register.component';
import {CompleteComponent} from './pages/register/complete/complete.component';

import {PassengerRegistrationComponent} from './pages/register/passenger/passenger-registration.component';
import {EditProfileComponent} from './pages/editProfile/edit-profile-component.component';
import {RequestRouteComponent} from './pages/requestRoute/request-route.component';
import {RideHistoryComponent} from './pages/rideHistory/ride-history.component';

import 'hammerjs';
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";
import {DirectionsMapDirective} from "./directives/agm-map-directive";
import {RouteRequestService} from "./services/route-request.service";
import {EventService} from "./services/events.service";
import {LoginService} from "./services/login.service";
import {SnackBarService} from "./services/snackbar.service";
import {SearchComponent} from './pages/search/search.component';
import {SearchService} from "./services/search.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterPassengerComponent,
    CompleteComponent,
    PassengerRegistrationComponent,
    EditProfileComponent,
    RequestRouteComponent,
    RideHistoryComponent,
    DirectionsMapDirective,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CdkTableModule,
    MdNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDxOhqc_IjqKkHAXleawn6aiOtXaV-tcA',
      libraries: ["places"]
    })
  ],
  providers: [
    requestOptionsProvider,
    LoginService,
    EventService,
    RegistrationService,
    GoogleMapsAPIWrapper,
    RouteRequestService,
    SearchService,
    SnackBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
