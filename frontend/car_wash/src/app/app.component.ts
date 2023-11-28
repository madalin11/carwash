import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./core/authentication/authentication.service";
import { AppState } from "./root-store/state";
import { Store } from "@ngrx/store";
import { CurrentUserRequestAction } from "./store/user-logged-store/actions/user-logged.actions";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private isAuthenticated$: Observable<boolean> = this.store.select('userLogged', 'isAuthenticated');

  constructor(private authenticationService: AuthenticationService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        return;
      }
      this.authenticationService.getToken().subscribe((token: any) => {
        if (!token) {
          return;
        }
        if (token) {
          this.store.dispatch(new CurrentUserRequestAction());
        }
      })
    });
  }
}
