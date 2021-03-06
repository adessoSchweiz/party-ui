import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './auth.guard';

import {LoginComponent} from '../pages/login/login.component';
import {RegisterPassengerComponent} from './../pages/register/register.component';
import {CompleteComponent} from '../pages/register/complete/complete.component';
import {EditProfileComponent} from "../pages/editProfile/edit-profile-component.component";
import {RequestRouteComponent} from "../pages/requestRoute/request-route.component";
import {RideHistoryComponent} from "../pages/rideHistory/ride-history.component";
import {SearchComponent} from "../pages/search/search.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register/passenger',
        component: RegisterPassengerComponent,
      },
      {
        path: 'complete',
        component: CompleteComponent,
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'editProfile',
        component: EditProfileComponent,
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'requestRoute',
        component: RequestRouteComponent,
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'search',
        component: SearchComponent,
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'rideHistory',
        component: RideHistoryComponent,
        canActivate: [
          AuthGuard
        ]
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
