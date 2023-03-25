import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  options = [
    {
    img: '/assets/options/laboratory.svg',
    title: 'Laboratorio',
    navigationURL: '/laboratory'
  },
  {
    img: '/assets/options/Status-Update-1.svg',
    title: 'Medicina',
    navigationURL: '/medicines'
  }
];

}
