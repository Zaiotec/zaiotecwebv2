import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../service/services.service';


@Component({
  selector: 'app-informaciond',
  templateUrl: './informaciond.component.html',
  styleUrls: ['./informaciond.component.css'],
    
})
export class InformaciondComponent {

  Dispositivo ={
    identificador:"",
    nombre:""
  }
  

constructor(private route: ActivatedRoute,public Service: ServicesService){
  let json =JSON.parse(this.Service.decrypt( this.route.snapshot.paramMap.get("id")+""));

  this.Dispositivo.identificador=json.identificador
  this.Dispositivo.nombre=json.nombre
    
  
}








 }


