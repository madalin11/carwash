import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./authentication/components/register/register.component";
import { LoginComponent } from "./authentication/components/login/login.component";
import { AuthenticationPageComponent } from "./authentication/authentication-page/authentication-page.component";
import { MainPageComponent } from "./main/main-page/main-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'auth',
        component: AuthenticationPageComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
