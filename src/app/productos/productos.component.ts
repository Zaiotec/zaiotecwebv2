import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ['$event'])
  onScroll(event: any) {
    
    //console.log("holi");
    //console.log(event);
  }


}
