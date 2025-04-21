import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimaryLandingComponent } from './btn-primary-landing.component';

describe('BtnPrimaryLandingComponent', () => {
  let component: BtnPrimaryLandingComponent;
  let fixture: ComponentFixture<BtnPrimaryLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPrimaryLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnPrimaryLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
