"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagesRoutingModule = void 0;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
// Componentes de Dashboard
var blank_component_1 = require("./blank/blank.component");
var dashboard_component_1 = require("./dashboard.component");
var not_found_component_1 = require("../share/not-found/not-found.component");
var routes = [
    {
        path: 'utopic_dashboard', component: dashboard_component_1.DashboardComponent,
        // canActivate: [AuthGuard],
        children: [
            // Default component
            { path: '', component: dashboard_component_1.DashboardComponent },
            // Consulta operaciones
            { path: 'muestra_datos_uno', component: blank_component_1.BlankComponent },
            { path: 'muestra_datos_dos', component: dashboard_component_1.DashboardComponent },
            { path: 'muestra_datos_tres', component: blank_component_1.BlankComponent },
            // Direccionamiento a Default Component
            { path: '**', component: not_found_component_1.NotFoundComponent, pathMatch: 'full' }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());
exports.PagesRoutingModule = PagesRoutingModule;
