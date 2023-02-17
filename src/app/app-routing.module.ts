import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'laboratory', loadChildren: async () => (await import('./pages/lab/lab.module')).LabModule},
  { path: '**', redirectTo: 'laboratory', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
