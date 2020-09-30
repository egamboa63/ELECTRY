import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { PruebaComponent } from "./prueba/prueba.component";
import { LoginComponent } from "./login/login.component";
import { PrincipalComponent } from "./principal/principal.component";

const routes: Routes = [
  {path:'',component:LoginComponent,},
  {path:'prueba',component:PruebaComponent,},
  {path:'inicio',component:InicioComponent,},
  {path:'saludo',component:PrincipalComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
