import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOne1Component } from './child-one1/child-one1.component';
import { ChildTwo2Component } from './child-two2/child-two2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOne1Component,
    ChildTwo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
