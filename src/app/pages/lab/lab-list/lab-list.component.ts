import { Component } from '@angular/core';
import { ILab } from 'src/app/shared/model/list.interface';
import dataLSJ from '../../../../assets/data/dataLSJ.json';
import {LabListService} from '../../../shared/services/lab-list.service'
@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss']
})
export class LabListComponent {
  labList: any[] = dataLSJ;
  searchQuery: string = '';
  constructor(private labService: LabListService) {

  }

  addLab(item: ILab) {

    if(this.checkDat(item)){
      this.labService.addLabitem(item);
    } else {
      this.labService.deleteLabitem(item);

    }
  }

  private checkDat(item: ILab): boolean{
    const element = document.getElementById(item.code);
    if(!element?.classList[3]){
      element?.classList.add('add');
      return true;
    } else {
      element?.classList.remove('add');
      return false;
    }
  }

  



}
