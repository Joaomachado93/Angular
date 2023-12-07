import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { EmitterComponent } from './emitter/emitter.component';
import { ChangeNumberComponent } from './change-number/change-number.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ListComponent,
    EmitterComponent,
    ChangeNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
