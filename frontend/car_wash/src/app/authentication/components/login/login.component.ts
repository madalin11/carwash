import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../core/authentication/authentication.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ErrorComponent } from "../../../shared/modals/error/error.component";
import { Store } from '@ngrx/store';
import { AppState } from "../../../root-store/state";
import { LoginFailureAction, LoginRequestAction } from "../../../store/user-logged-store/actions/user-logged.actions";
import { take } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // @ts-ignore
  loginForm: FormGroup;
  isLoading$ = this.store.select('userLogged', 'isLoading');
  private isAuthenticated$ = this.store.select('userLogged', 'isAuthenticated');

  private error$ = this.store.select('userLogged', 'error');
  loading = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public dialog: MatDialog,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.loading = true;
    setTimeout(()=> {
      this.loading = false;
    }, 500);

    this.isAuthenticated$.subscribe((response) => {
      if (!response) {
        return;
      }
      this.router.navigate(['main']);
    })
    this.error$.pipe(take(2)).subscribe((error) => {
      if (!error) {
        return;
      }
      const dialogRef = this.dialog.open<ErrorComponent>(ErrorComponent, {
        autoFocus: false,
        data: {
          message: error
        },
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.store.dispatch(new LoginFailureAction({ error: null }));
      });
    })
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  onSubmit() {
    if (this.loginForm?.invalid) {
      return;
    }
    const email = this.loginForm?.get('email')?.value;
    const password = this.loginForm?.get('password')?.value;

    this.store.dispatch(new LoginRequestAction({ email, password }));
  }
}
