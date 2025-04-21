import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

type BtnVariants = "primary" | "secondary" | "login";

@Component({
  selector: 'btn-primary-landing',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn-primary-landing.component.html',
  styleUrl: './btn-primary-landing.component.scss'
})
export class BtnPrimaryLandingComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";
  @Output("submit") onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
