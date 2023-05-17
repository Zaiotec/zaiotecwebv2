import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
