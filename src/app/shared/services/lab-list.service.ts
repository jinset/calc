import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ILab } from '../model/list.interface';

@Injectable({
  providedIn: 'root'
})
export class LabListService {
  private labList:ILab[] = [];
  labList$ = new Subject<ILab[]>();
  constructor() { }

  addLabitem(item: ILab): void {
    this.labList.push(item);
    this.labList$.next(this.labList);
  }

  deleteLabitem(item: ILab): void {
    const index = this.labList.findIndex((data:ILab) => data.code === item.code);
    if (index !== -1) {
      console.log()
      this.labList.splice(index, 1);
      this.labList$.next(this.labList);
    }
  }
}
