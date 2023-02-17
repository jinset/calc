import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { LabComponent } from './lab.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { LabListAddComponent } from './lab-list-add/lab-list-add.component';
import { LabCalcComponent } from './lab-calc/lab-calc.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../shared/pipe/filter.pipe'

@NgModule({
  declarations: [
    FilterPipe,
    LabComponent,
    LabListComponent,
    LabListAddComponent,
    LabCalcComponent,
    
  ],
  imports: [
    CommonModule,
    LabRoutingModule,
    FormsModule
  ]
})
export class LabModule { }
