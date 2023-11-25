import { Component, HostListener, OnInit } from '@angular/core';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
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
          image: '../../assets/images/agricultura_inteligente.jpeg',
                  
        
        },
    {
         
         image: '../../assets/images/casa-inteligente.jpeg',
    },
    {
         
         image: '../../assets/images/CDMX_inteligente.jpeg',
    },
    {
      
      image: '../../assets/images/Logistica-integral.jpeg',
 },

    {
      image: '../../assets/images/Transporte_inteligente.png',
              

    },
    {
    
    image: '../../assets/images/Industria_inteligente.jpg',
    },
    
    
   


    ];


}
