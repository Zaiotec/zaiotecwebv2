
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ServicesService } from '../service/services.service';
import * as CryptoJS from 'crypto-js';



@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent {
  isCollapsed = true;
  arrayDispositivos: Array<{nombreDispositivo:string,identificadorDispositivos:string,redDispositivos:string,
    tipoDispositivo:string,bateriaDispositivo:string,ultimaactividadDispositivos:string}>=[];
 

      constructor(private router: Router, public Service: ServicesService,){
        for(var i= 0; i<6; i++){
  var json= {nombreDispositivo:"Nombre "+i,identificadorDispositivos:"Identificador "+i,redDispositivos:"Red "+i,
    tipoDispositivo:"Tipo "+i,bateriaDispositivo:"Batería "+i,ultimaactividadDispositivos:"Ultima Actividad "+i};
    this.arrayDispositivos.push(json);    
  }
      
    }

   

    detallesDispositivo(i:number){
     var json={
        "identificador":this.arrayDispositivos[i].identificadorDispositivos,
        "nombre":this.arrayDispositivos[i].nombreDispositivo,
        
     }
     
 
      this.router.navigate(['/Informaciond',this.Service.encrypt(JSON.stringify(json))]);
      
    /* const id =i;
      const key = 'wnyZDRanmi'; 
      const cif = CryptoJS.AES.encrypt(id.toString(), key).toString();
     
      console.log('ID cifrado:', cif);*/

      

        } 
      
        
        
      

}


             

           
  



