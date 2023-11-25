import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {
  selectedMenu:any='Submenu';
  isCollapsed = true;
  usuarioSession = {
    tokenSession: "",
    nombre : "",
    apPaterno : "",
    apMaterno : "",
    tipoUsuario : 0,
  }

constructor(public Service: ServicesService, private router: Router){
  this.getSession();
}

goTo(paramText: string) {
this.selectedMenu = paramText
}


getSession(){
  var session = this.Service.getSession();
  console.log(session);
  if(session == ""){
    this.router.navigate(['']);
    alert("Sesión no  valida");
  }else{
    this.usuarioSession.apMaterno = session.apMaternoUsuario;
    this.usuarioSession.apPaterno = session.apPaternoUsuario;
    this.usuarioSession.nombre = session.nombreUsuario;
    this.usuarioSession.tipoUsuario = session.tipo;
    this.usuarioSession.tokenSession = session.tokenSession;
   // alert(this.usuarioSession.nombre+" "+this.usuarioSession.apPaterno);
  }
}
}

