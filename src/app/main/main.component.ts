import { Component, HostListener, OnInit } from '@angular/core';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
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
   config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
   };
   
   slides = [
    {
         
      image: '../../assets/images/Consultoria.png',
                   
    },
    {
         
         image: '../../assets/images/Des-Est-Dig.png',
    },
    {
         
         image: '../../assets/images/Automatizacion.png',
    },
    {
      
      image: '../../assets/images/Dis-Electronicos.png',
 },



    ];

}
