import { Component, OnInit,ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';
import { Map, Marker, NavigationControl } from 'maplibre-gl';  



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit, OnDestroy {

  selectedMenu:any='Home';
  isCollapsed = true;

  usuarioSession = {
    tokenSession: "",
    nombre : "",
    apPaterno : "",
    apMaterno : "",
    tipoUsuario : 0,
  }
 /* map: maplibregl.Map;
  ngOnInit() {
    this.initializeMap();
  }
  initializeMap() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'maplibre://styles/mapbox/streets-v11', 
      center: [-74.5, 40], 
      zoom: 9
    });
  }*/

  map: Map | undefined;
  @ViewChild('map')
private mapContainer!: ElementRef<HTMLElement>;


 
  constructor(public Service: ServicesService, private router: Router){
    this.getSession();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const initialState = { lng: -99.472338, lat: 19.334577, zoom: 14 };
    const apiKey = "v1.public.eyJqdGkiOiJjZjE2NmYwNi00NWQ3LTQ2NWItOWQ2Ni03OWY2ZTRjMWJhMDYifZXaCXBtFgKZLKdrmmDQyvGtKw-wqlxm6VDPZx-zgXE-a3Ovq0eYvPfWYQtKoB67KOS-pBiCektnWh_g2y6wmXUFr631IOwJnHl5pIOOsrjR8ei42ltamIvFhY_nRtqN3bScC_gCAWOjYkaTA3sZNUmjPlp4NlGC1ZXUYClQtVv7IcyofLrQ9qwSmwsTPRulqwtb__0Lk5dbSCg82cRhsrCd_8DOIAnJtsRYCb34qRX3vVOAyzdLjO9CIKLQVGYsNt7rMjZZPIimMiH_obuRytLnSEM6MSD2k5H_9c2yIh1_Ke4H_mIZFnpbMM351_ksStvJw2og3gj634ciYjiWi5M.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx";
    const mapName = "Mapa_1";
      const region = "us-east-1";
    this.map = new Map({ 
      container: this.mapContainer.nativeElement,
      style: "https://maps.geo."+region+".amazonaws.com/maps/v0/maps/"+mapName+"/style-descriptor?key="+apiKey,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    this.map.addControl(new NavigationControl(), 'top-right');
    new Marker({color: "#FF0000"})
      .setLngLat([-99.472338,19.334577])//19.334577, -99.472338
      .addTo(this.map);
      new Marker({color: "#FF0000"})
      .setLngLat([-99.67656967153866 , 19.28300303100438])//19.28300303100438, -99.67656967153866
      .addTo(this.map);


  
  }
  ngOnDestroy(): void {
    this.map?.remove();
  }


  
  goTo(paramText: string) {
  this.selectedMenu = paramText
  }


  getSession(){
    var session = this.Service.getSession();
    console.log(session);
    if(session == ""){
      this.router.navigate(['']);
      alert("Sesión no  valida");
    }else{
      this.usuarioSession.apMaterno = session.apMaternoUsuario;
      this.usuarioSession.apPaterno = session.apPaternoUsuario;
      this.usuarioSession.nombre = session.nombreUsuario;
      this.usuarioSession.tipoUsuario = session.tipo;
      this.usuarioSession.tokenSession = session.tokenSession;
     // alert(this.usuarioSession.nombre+" "+this.usuarioSession.apPaterno);
    }
  }

}
