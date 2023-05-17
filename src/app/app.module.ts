import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BannerFooterComponent } from './banner-footer/banner-footer.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    
    MainComponent,
    NosotrosComponent,
    BannerFooterComponent,
    ProductosComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    
    [NgbPaginationModule, NgbAlertModule], NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/**
 * 
 * 
 * faltan iconos de facebook y linkdink asi como los enlcaces
 * falta aviso de privacidad
 * 
 * 
 * DEsarrollo
 * menu con colores
 * texto encima opacado el fondo (imagen)
 */