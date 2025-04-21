import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {BtnPrimaryLandingComponent} from "../btn-primary-landing/btn-primary-landing.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BtnPrimaryLandingComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   constructor(
    private router: Router
   ){}

  login() {
    this.router.navigate(["/login"]);
  }

  singup() {
    this.router.navigate(["/signup"]);
  }
}
