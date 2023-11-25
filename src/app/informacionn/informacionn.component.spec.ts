import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionnComponent } from './informacionn.component';

describe('InformacionnComponent', () => {
  let component: InformacionnComponent;
  let fixture: ComponentFixture<InformacionnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
