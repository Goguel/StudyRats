import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {
  }
  navigate() {
    this.router.navigate(["/login"]);
  }
}
