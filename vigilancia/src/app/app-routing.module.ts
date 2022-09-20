import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {PagesComponent} from './shared/pages/pages.component';
import {UsuarioListComponent} from './usuarios/usuario-list/usuario-list.component';
import {DepartamentoListComponent} from './edificios/departamentos/departamento-list/departamento-list.component';
import {DepartamentoAddComponent} from './edificios/departamentos/departamento-add/departamento-add.component';
import {ResidenteListComponent} from './edificios/residente/residente-list/residente-list.component';
import {ResidenteAddComponent} from './edificios/residente/residente-add/residente-add.component';
import {AutosListComponent} from './edificios/autos/autos-list/autos-list.component';
import {AutosAddComponent} from './edificios/autos/autos-add/autos-add.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'dashboard',component: PagesComponent,
  children:[
    {path:'usuarios',component: UsuarioListComponent},
    {path:'departamentos',component: DepartamentoListComponent},
    {path:'addDepartamentos', component: DepartamentoAddComponent},
    {path:'residentes',component:ResidenteListComponent},
    {path:'addResidente',component: ResidenteAddComponent},
    {path:'autos',component:AutosListComponent},
    {path:'addAutos',component:AutosAddComponent}
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
