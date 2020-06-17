import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* Componentes */

import {HomeComponent} from "./components/home/home.component"


import {ErrorComponent} from './components/error/error.component'
import { from } from 'rxjs';

/* Rutas */

const appRoutes:Routes=[
    {path:'', component:HomeComponent},

    /*404*/
    {path:'**', component:ErrorComponent}
]

/*Eposrtar*/

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);