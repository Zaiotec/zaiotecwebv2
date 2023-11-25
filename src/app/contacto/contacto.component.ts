import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  isCollapsed = true;

jsonContacto = {
  nombreContacto : "",
  correoContacto : "",
  asuntoContacto : "",
  mensajeContacto : ""
}

  constructor() { }

  ngOnInit(): void {
  }

}
