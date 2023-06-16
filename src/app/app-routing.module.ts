import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';

import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  { path: '', component: MainComponent ,  pathMatch: 'full'},
  { path: 'Empresa', component: NosotrosComponent ,  pathMatch: 'full'},
  { path: 'Productos', component: ProductosComponent ,  pathMatch: 'full'},
  { path: 'Contacto', component: ContactoComponent ,  pathMatch: 'full'},
  { path: 'Login', component: LoginComponent ,  pathMatch: 'full'},
  { path: 'Registro', component: RegistroComponent,  pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
