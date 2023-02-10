import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import dataLSJ from '../../../assets/data/dataLSJ.json';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent implements OnInit {
  todo: any[] = dataLSJ;
  done: any[] = [];
  total: number = 0;
  
  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.sum();
  }

  sum() {
    this.total = 0;
    if (!this.done.length) {
      this.total = 0;
    }
    this.done.forEach((data) => {
      this.total = this.total + data.PRECIO;
    });
  }
}
