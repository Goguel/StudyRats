import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {NgOptimizedImage} from "@angular/common";
import {BtnPrimaryLandingComponent} from "../../components/btn-primary-landing/btn-primary-landing.component";
import {LandingFormsComponent} from "../../components/landing-forms/landing-forms.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryLandingComponent,
    LandingFormsComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
