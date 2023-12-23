import { Component,OnInit,ViewChild, ElementRef, AfterViewInit, OnDestroy, Inject  } from '@angular/core';
import { Map, Marker, NavigationControl } from 'maplibre-gl';  
import * as mapboxgl from 'maplibre-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';

import { ServicesService } from '../service/services.service';


@Component({
  selector: 'app-geocercas',
  templateUrl: './geocercas.component.html',
  styleUrls: ['./geocercas.component.css'],
  template: `
    <button (click)="agregarGeocerca()">Agregar Geocerca</button>
  `,
})
export class GeocercasComponent implements OnInit {

  constructor( public Service: ServicesService) {}


  private cont: mapboxgl.Map;
  private marker:maplibregl.Marker;
  private draw: MapboxDraw;
 



  map: Map | undefined;
  @ViewChild('map')
private mapContainer!: ElementRef<HTMLElement>;
ngOnInit()  {

  /*const location = this.amplifyService.api().get('location');
  const geofenceData = {
    FenceName: 'MiGeocerca',
    Geometry: {
      Polygon: [
        [-74.1, 40.7],
        [-74.1, 40.8],
        [-73.9, 40.8],
        [-73.9, 40.7],
        [-74.1, 40.7]
      ]
    },
    // Otras opciones según tus necesidades
  };

  location.post('/geofence', geofenceData)
    .then((response: any) => {
      console.log('Geocerca creada:', response);
    })
    .catch((error: any) => {
      console.error('Error al crear geocerca:', error);
    });*/
}



ngAfterViewInit() {
  const initialState = { lng: -99.46879 , lat: 19.22473 , zoom: 14 };
  const apiKey = "v1.public.eyJqdGkiOiJjZjE2NmYwNi00NWQ3LTQ2NWItOWQ2Ni03OWY2ZTRjMWJhMDYifZXaCXBtFgKZLKdrmmDQyvGtKw-wqlxm6VDPZx-zgXE-a3Ovq0eYvPfWYQtKoB67KOS-pBiCektnWh_g2y6wmXUFr631IOwJnHl5pIOOsrjR8ei42ltamIvFhY_nRtqN3bScC_gCAWOjYkaTA3sZNUmjPlp4NlGC1ZXUYClQtVv7IcyofLrQ9qwSmwsTPRulqwtb__0Lk5dbSCg82cRhsrCd_8DOIAnJtsRYCb34qRX3vVOAyzdLjO9CIKLQVGYsNt7rMjZZPIimMiH_obuRytLnSEM6MSD2k5H_9c2yIh1_Ke4H_mIZFnpbMM351_ksStvJw2og3gj634ciYjiWi5M.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx";
  const mapName = "Mapa_1";
    const region = "us-east-1";


  this.map = new Map({ 
    container: this.mapContainer.nativeElement,
    style: "https://maps.geo."+region+".amazonaws.com/maps/v0/maps/"+mapName+"/style-descriptor?key="+apiKey,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }); 
  this.marker = new mapboxgl.Marker()
      .setLngLat([-99.46879,19.22473])
      .addTo(this.map);
    this.map.addControl(new NavigationControl(), 'top-right');



   
  }
 
  agregarGeocerca() {
    const geocercaData = {
      
    };

    this.Service.agregarGeocerca(geocercaData)
      .subscribe((response: any) => {
        console.log('Geocerca agregada exitosamente:', response);
      }, (error: any) => {
        console.error('Error al agregar geocerca:', error);
      });
  
}



}





