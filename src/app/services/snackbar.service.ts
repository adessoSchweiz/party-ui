/**
 * Created by sascha.ruesing on 13.07.2017.
 */
import {Injectable} from "@angular/core";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";

@Injectable()
export class SnackBarService {

  constructor(private snackBar: MdSnackBar) {
  }

  public openSnackBar(message: string) {
    let config = new MdSnackBarConfig();
    config.duration = 2000;
    this.snackBar.open(message, null, config);
  }

  public openSnackBarWithAction(message: string, action: string) {
    let config = new MdSnackBarConfig();
    config.duration = 2000;
    this.snackBar.open(message, action, config);
  }

  public openSnackBarWithActionAndDuration(message: string, action: string, duration: number) {
    let config = new MdSnackBarConfig();
    config.duration = duration;
    this.snackBar.open(message, action, config);
  }
}
