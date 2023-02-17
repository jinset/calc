import { Component, ElementRef, ViewChild } from '@angular/core';
import { ILab } from 'src/app/shared/model/list.interface';
import { LabListService } from 'src/app/shared/services/lab-list.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-lab-calc',
  templateUrl: './lab-calc.component.html',
  styleUrls: ['./lab-calc.component.scss']
})
export class LabCalcComponent {
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  labList:ILab[] = [];
  total: number = 0;
  constructor(private labService: LabListService){
    this.labService.labList$.subscribe((list:any) => {
      this.labList = list;
      this.sum();
    })
  }

  downloadImage(){
    const now = new Date();

    html2canvas(this.screen.nativeElement).then(canvas => {

      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = `${now.toLocaleString()}.png`;
      this.downloadLink.nativeElement.click();
    });
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
