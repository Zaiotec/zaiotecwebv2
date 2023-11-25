import { Component } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selectedMenu:any='Home';

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


  goTo(string: any){
    
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
