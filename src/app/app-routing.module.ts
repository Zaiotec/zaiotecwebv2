import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';

import { CrudUserComponent } from './crud-user/crud-user.component';

import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { GeocercasComponent } from './geocercas/geocercas.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InformaciondComponent } from './informaciond/informaciond.component';
import {InformacionnComponent } from './informacionn/informacionn.component';
import {SubmenuComponent} from './submenu/submenu.component';

const routes: Routes = [
  { path: '', component: MainComponent ,  pathMatch: 'full'},
  { path: 'Empresa', component: NosotrosComponent ,  pathMatch: 'full'},
  { path: 'Productos', component: ProductosComponent ,  pathMatch: 'full'},
  { path: 'Contacto', component: ContactoComponent ,  pathMatch: 'full'},
  { path: 'Login', component: LoginComponent ,  pathMatch: 'full'},
  { path: 'Registro', component: RegistroComponent,  pathMatch: 'full'},
  { path: 'Inicio', component: InicioComponent,  pathMatch: 'full'},
  { path: 'Menu', component: MenuComponent,  pathMatch: 'full'},
  { path: 'Dispositivos', component: DispositivosComponent,  pathMatch: 'full'},
  { path: 'Usuarios', component: CrudUserComponent,  pathMatch: 'full'},
  { path: 'Notificaciones', component: NotificacionesComponent,  pathMatch: 'full'},
  { path: 'Geocercas', component: GeocercasComponent,  pathMatch: 'full'},
  { path: 'Configuracion', component: ConfiguracionComponent,  pathMatch: 'full'},
  { path: 'Usuario', component: UsuarioComponent,  pathMatch: 'full'},
  { path: 'Informacionn', component:  InformacionnComponent,  pathMatch: 'full'},
  { path: 'Informaciond/:id', component: InformaciondComponent,  pathMatch: 'full'},
  { path: 'Submenu', component: SubmenuComponent,  pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
