import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicinesComponent } from './medicines.component';
import { DailyTableComponent } from './daily-table/daily-table.component';


@NgModule({
  declarations: [
    MedicinesComponent,
    DailyTableComponent
  ],
  imports: [
    CommonModule,
    MedicinesRoutingModule
  ]
})
export class MedicinesModule { }
