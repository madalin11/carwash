import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from "@angular/forms";
import { UserLoggedEffects } from "./store/user-logged-store/user-logged.effects";
import { AuthenticationService } from "./core/authentication/authentication.service";
import { TokenInterceptor } from "./core/authentication/token.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { userLoggedReducer } from "./store/user-logged-store/reducer/user-logged.reducer";
import { AuthenticationPageComponent } from "./authentication/authentication-page/authentication-page.component";
import { LoginComponent } from "./authentication/components/login/login.component";
import { RegisterComponent } from "./authentication/components/register/register.component";
import { MainPageComponent } from "./main/main-page/main-page.component";
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    StoreModule.forRoot({
      // @ts-ignore
      userLogged: userLoggedReducer,
    }),
    EffectsModule.forRoot([UserLoggedEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: MatDialogRef, useValue: {} },
    UserLoggedEffects,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
