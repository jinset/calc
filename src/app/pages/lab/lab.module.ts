import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { LabComponent } from './lab.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { LabListAddComponent } from './lab-list-add/lab-list-add.component';
import { LabCalcComponent } from './lab-calc/lab-calc.component';


@NgModule({
  declarations: [
    LabComponent,
    LabListComponent,
    LabListAddComponent,
    LabCalcComponent
  ],
  imports: [
    CommonModule,
    LabRoutingModule
  ]
})
export class LabModule { }
