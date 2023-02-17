import { Component } from '@angular/core';
import { ILab } from 'src/app/shared/model/list.interface';
import { LabListService } from 'src/app/shared/services/lab-list.service';

@Component({
  selector: 'app-lab-list-add',
  templateUrl: './lab-list-add.component.html',
  styleUrls: ['./lab-list-add.component.scss']
})
export class LabListAddComponent {
  labList:ILab[] = [];
  constructor(private labService: LabListService){
    this.labService.labList$.subscribe((list:any) => {
      this.labList = list;
    })
  }

  remove(item: ILab) {
    this.labService.deleteLabitem(item);
  }



}
