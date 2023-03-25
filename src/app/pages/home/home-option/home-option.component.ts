import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-option',
  templateUrl: './home-option.component.html',
  styleUrls: ['./home-option.component.scss']
})
export class HomeOptionComponent {
  @Input() imgURL!: string;
  @Input() navegationURL!: string;
  @Input() title!: string;

  constructor() {

  }

}
