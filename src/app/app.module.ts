import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BannerFooterComponent } from './banner-footer/banner-footer.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from'@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { SwiperModule } from 'swiper/angular';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { GeocercasComponent } from './geocercas/geocercas.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InformaciondComponent } from './informaciond/informaciond.component';
import { InformacionnComponent } from './informacionn/informacionn.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { CrudUserComponent } from './crud-user/crud-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NosotrosComponent,
    BannerFooterComponent,
    ProductosComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    InicioComponent,
    MenuComponent,
    DispositivosComponent,
    NotificacionesComponent,
    CrudUserComponent,
    GeocercasComponent,
    ConfiguracionComponent,
    UsuarioComponent,
    InformaciondComponent,
    InformacionnComponent,
    SubmenuComponent,
   
   
    
  ],
  imports: [
    MatCheckboxModule,
    [NgbPaginationModule, NgbAlertModule], NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatTabsModule,
    
   
    
  ],
providers: [CookieService],//verificar bien la version de la coockie por que si no truena
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