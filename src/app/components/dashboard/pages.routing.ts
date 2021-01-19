import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Componentes de Dashboard
import { AuthGuard } from '../../guard/auth.guard';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: 'dashboard/:elemento', component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            // Default component
            { path: '', component: DashboardComponent, outlet: "dashboard" },
            // Consulta operaciones
            { path: 'muestra_datos', component: BlankComponent, outlet: "dashboard" },
            // Direccionamiento a Default Component
            { path: '**', component: BlankComponent, pathMatch: 'full', outlet: "dashboard" }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}