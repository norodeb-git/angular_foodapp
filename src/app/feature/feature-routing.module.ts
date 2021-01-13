import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthService } from '../authenticate/login-auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:"dashboard",component:DashboardComponent , canActivate:[LoginAuthService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
