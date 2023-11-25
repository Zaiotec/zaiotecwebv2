import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaciondComponent } from './informaciond.component';



describe('InformaciondComponent', () => {
  let component: InformaciondComponent;
  let fixture: ComponentFixture<InformaciondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformaciondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformaciondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
