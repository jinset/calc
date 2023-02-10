import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './calc.component';
import {MatNativeDateModule} from '@angular/material/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FilterPipe} from '../../shared/pipe/filter.pipe'

@NgModule({
  declarations: [
    CalcComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CalcRoutingModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ]
})
export class CalcModule { }
