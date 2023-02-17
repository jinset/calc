import { Component } from '@angular/core';
import { ILab } from 'src/app/shared/model/list.interface';
import { LabListService } from 'src/app/shared/services/lab-list.service';

@Component({
  selector: 'app-lab-calc',
  templateUrl: './lab-calc.component.html',
  styleUrls: ['./lab-calc.component.scss']
})
export class LabCalcComponent {
  labList:ILab[] = [];
  total: number = 0;
  constructor(private labService: LabListService){
    this.labService.labList$.subscribe((list:any) => {
      this.labList = list;
      this.sum();
    })

  }

  private sum() {
    this.total = 0;
    if (!this.labList.length) {
      this.total = 0;
    }
    this.labList.forEach((lab:ILab) => {
      this.total = this.total + lab.price;
    });
  }
}
