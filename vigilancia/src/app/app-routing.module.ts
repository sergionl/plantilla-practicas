import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
//auth
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
//shared
import {NavbarComponent} from './shared/navbar/navbar.component';
import {PagesComponent} from './shared/pages/pages.component';
//usuario
import {UsuarioListComponent} from './usuarios/usuario-list/usuario-list.component';
//edificios
import {DepartamentoListComponent} from './edificios/departamentos/departamento-list/departamento-list.component';
import {DepartamentoAddComponent} from './edificios/departamentos/departamento-add/departamento-add.component';
import {ResidenteListComponent} from './edificios/residente/residente-list/residente-list.component';
import {ResidenteAddComponent} from './edificios/residente/residente-add/residente-add.component';
import {AutosListComponent} from './edificios/autos/autos-list/autos-list.component';
import {AutosAddComponent} from './edificios/autos/autos-add/autos-add.component';
//tarjetas
import {TarjetasAddComponent} from './tarjetas/tarjetas-add/tarjetas-add.component';
import {TarjetasListComponent} from './tarjetas/tarjetas-list/tarjetas-list.component';
//eventos
import {EventosAddComponent} from './eventos/eventos-add/eventos-add.component';
import {EventosListComponent} from './eventos/eventos-list/eventos-list.component';

const routes: Routes = [
  //auth
  {path: '', redirectTo: '/login',pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path:'forgotPassword',component: ForgotPasswordComponent},
  {path: 'dashboard',component: PagesComponent,
  children:[
    //usuarios
    {path:'usuarios',component: UsuarioListComponent},
    //edificios
    {path:'departamentos',component: DepartamentoListComponent},
    {path:'addDepartamentos', component: DepartamentoAddComponent},
    {path:'residentes',component:ResidenteListComponent},
    {path:'addResidente',component: ResidenteAddComponent},
    {path:'autos',component:AutosListComponent},
    {path:'addAutos',component:AutosAddComponent},
    //tarjetas
    {path:'tarjetas',component: TarjetasListComponent},
    {path:'addTarjetas',component: TarjetasAddComponent},
    //eventos
    {path:'eventos',component: EventosListComponent},
    {path:'addEventos',component: EventosAddComponent}
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
