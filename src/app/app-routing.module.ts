import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegisterPageComponent} from './components/register-page/register-page.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {UserTypeComponent} from './components/user-type/user-type.component';
import {RegisterStepComponent} from './components/register-step/register-step.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'tipo-de-cuenta',component: UserTypeComponent},
  {path: 'registrar-grupo', component:RegisterStepComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registrarse', component: RegisterPageComponent},
  {path: 'admin', component:DashboardPageComponent , canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
