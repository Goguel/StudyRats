import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFormsComponent } from './landing-forms.component';

describe('LandingFormsComponent', () => {
  let component: LandingFormsComponent;
  let fixture: ComponentFixture<LandingFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
