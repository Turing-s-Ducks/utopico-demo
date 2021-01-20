import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../guard/auth.guard';
// Componentes de Dashboard
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from '../share/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'utopic_dashboard', component: DashboardComponent,
        // canActivate: [AuthGuard],
        children: [
            // Default component
            { path: '', component: DashboardComponent },
            // Consulta operaciones
            { path: 'muestra_datos_uno', component: BlankComponent  },
            { path: 'muestra_datos_dos', component: DashboardComponent },
            { path: 'muestra_datos_tres', component: BlankComponent },
            // Direccionamiento a Default Component
            { path: '**', component: NotFoundComponent, pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}