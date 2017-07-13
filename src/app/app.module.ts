import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdNativeDateModule} from '@angular/material';

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
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBH0nNQwCuSEw3ty1qu6Pla7QK_L6Hx9eY',
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
    SnackBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
