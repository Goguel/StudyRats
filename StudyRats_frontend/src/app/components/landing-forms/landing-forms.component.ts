import { Component } from '@angular/core';
import {BtnPrimaryLandingComponent} from "../btn-primary-landing/btn-primary-landing.component";

@Component({
  selector: 'landing-forms',
  standalone: true,
  imports: [
    BtnPrimaryLandingComponent
  ],
  templateUrl: './landing-forms.component.html',
  styleUrl: './landing-forms.component.scss'
})
export class LandingFormsComponent {

}
