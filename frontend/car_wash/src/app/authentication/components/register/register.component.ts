import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../core/authentication/authentication.service";
import { Router } from "@angular/router";
import { ErrorComponent } from "../../../shared/modals/error/error.component";
import { MatDialog } from "@angular/material/dialog";
import { AppState } from "../../../root-store/state";
import { Store } from "@ngrx/store";
import {
  LoginFailureAction,
  RegisterRequestAction
} from "../../../store/user-logged-store/actions/user-logged.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  registerForm: FormGroup;
  isLoading$ = this.store.select('userLogged', 'isLoading');
  error$ = this.store.select('userLogged', 'error');
  loading = false;

  isAuthenticated$ = this.store.select('userLogged', 'isAuthenticated');


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router, private dialog: MatDialog,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);

    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$')]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$')]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.pattern('^(\\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\\s|\\.|\\-)?([0-9]{3}(\\s|\\.|\\-|)){2}$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });

    this.error$.subscribe(err => {
      if (!err) {
        return;
      }
      const dialogRef = this.dialog.open<ErrorComponent>(ErrorComponent, {
        autoFocus: false,
        data: {
          message: err
        },
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.store.dispatch(new LoginFailureAction({ error: null }));
      });
    })

    this.isAuthenticated$.subscribe((response) => {
      if (!response) {
        return;
      }
      this.router.navigate(['main']);
    })
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log('invalid form');
      return;
    }

    const firstName = this.registerForm.get('firstName')?.value;
    const lastName = this.registerForm.get('lastName')?.value;
    const phoneNumber = this.registerForm.get('phoneNumber')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;

    this.store.dispatch(new RegisterRequestAction({ firstName, lastName, phoneNumber, email, password }));
  }
}
