import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-banner-footer',
  templateUrl: './banner-footer.component.html',
  styleUrls: ['./banner-footer.component.css']
})
export class BannerFooterComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    
 
  }


  ngOnInit(): void {
  console.log("antes contructor");
  }

  open(content : any) {
    this.modalService.open(content,  { size: 'xl' });
  }

}
