import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivesRoutingModule } from './lives-routing.module';
import { LivesComponent } from './lives.component';
import { HomeComponent } from '../../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LivesRoutingModule,    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LivesModule { }
