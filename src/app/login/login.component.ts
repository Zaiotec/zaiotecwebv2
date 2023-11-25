import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isCollapsed = true;
  Muestra='';

  
  ngOnInit(): void {
    console.log("Esto es antes del geSaludo")
    this.Service.getSaludo().subscribe(
      datos => {
        var json = JSON.parse(JSON.stringify(datos));
        console.log(json + " esto en json " + JSON.stringify(json));
        console.log("Esto es despues del geSaludo")
        this.Muestra = json.message;
      });
      
    }
  
  constructor(public Service: ServicesService, config: NgbModalConfig, private modalService: NgbModal, private router: Router) { 
    config.backdrop = 'static';
		config.keyboard = false;
  }
  open(content:any) {
		this.modalService.open(content);
  
  }
  close(){
    this.modalService.dismissAll();
  } 


  userLogin = {
    usuario: "",
    pass: ""
  }

  
  login() {
    if(this.userLogin.usuario == ''){
      alert ("Ingresa Correo")

    }else    if(this.userLogin.pass == ''){
      alert ("Ingresa Contraseña")
    }else{ 
      this.Service.login(this.userLogin).subscribe(
      datos => {
        var json = JSON.parse(JSON.stringify(datos));
        console.log(json + " esto en json " + JSON.stringify(json));
        var jsonRespuesta = JSON.parse(JSON.stringify(datos));

        if(jsonRespuesta.code == 200){
          let userLog = jsonRespuesta.data;
          if(userLog.correoVerificado == 1){
            //save session
            this.Service.saveSession(userLog);
            this.router.navigate(['/Inicio']);

          }else{
            
            alert("Hola "+userLog.nombreUsuario+" verifica tu correo " );
           }
        }else{
          alert(jsonRespuesta.message);
        }
 
      });}
  
  } 

  validar(){
    if(this.userLogin.usuario == '' ){
    
      this.Service.login(this.userLogin).subscribe(
        datos => {
          var json = JSON.parse(JSON.stringify(datos));
          console.log(json + " esto en json " + JSON.stringify(json));
          var jsonRespuesta = JSON.parse(JSON.stringify(datos));
      if(jsonRespuesta.code == 200){
        let userLog = jsonRespuesta.data;
        if(userLog.correoVerificado == 1){
          alert("Bienvenido "+userLog.nombreUsuario);
          }
      }else{
        alert(jsonRespuesta.code == 400);
      }
        });}
}

}