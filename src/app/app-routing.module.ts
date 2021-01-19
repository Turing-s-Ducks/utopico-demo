import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { BlankComponent } from './components/blank/blank.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagesRoutingModule } from './components/dashboard/pages.routing';

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent},
  { path: '',component:LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
