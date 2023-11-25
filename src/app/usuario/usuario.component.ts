import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  texto: string = '';
  texto1: string = '';
  texto2: string = '';
  texto3: string = '';
  texto4: string = '';
  texto5: string = '';
  seleccion= false;



  limpiar() {
    this.texto = '';
    this.texto1 = '';
    this.texto2 = '';
    this.texto3 = '';
    this.texto4 = '';
    this.texto5 = '';
  }
 
}
