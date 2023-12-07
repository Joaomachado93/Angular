import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivesComponent } from './lives.component';
import { HomeComponent } from '../../home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivesRoutingModule { }
