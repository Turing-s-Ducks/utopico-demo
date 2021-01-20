import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Rutas de Dashboard
import { PagesRoutingModule } from './components/dashboard/pages.routing';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlankComponent } from './components/dashboard/blank/blank.component';
import { SignupComponent } from './components/share/signup/signup.component';
import { LoginComponent } from './components/share/login/login.component';

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent},
  { path: 'login', component:LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule
          ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
