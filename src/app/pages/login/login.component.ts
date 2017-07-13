import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {EventService} from "../../services/events.service";
import {SnackBarService} from "../../services/snackbar.service";

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private login: string;
  private password: string;

  constructor(private loginService: LoginService,
              private router: Router,
              private _eventService: EventService,
              private snackBarService: SnackBarService) {
  }

  onSubmit() {
    console.log('Logging in with: ', this.login, ' ', this.password);

    // Call backend via REST
    this.loginService.login(this.login, this.password)
      .subscribe(passenger => {
          // Inform components about logged in passenger
          this._eventService.login(passenger);

          // Redirect user to request route page
          this.router.navigate(['/requestRoute']);
        },
        error => this.snackBarService.openSnackBar('Invalid credentials')
      );
  }
}
