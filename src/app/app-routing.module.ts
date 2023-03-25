import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: async () => (await import('./pages/home/home.module')).HomeModule},
  { path: 'laboratory', loadChildren: async () => (await import('./pages/lab/lab.module')).LabModule},
  { path: 'medicines', loadChildren: async () => (await import('./pages/medicines/medicines.module')).MedicinesModule},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
