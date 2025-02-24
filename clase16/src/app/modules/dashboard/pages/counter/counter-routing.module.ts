import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
