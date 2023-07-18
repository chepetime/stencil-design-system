import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  ComponentLibraryModule,
  MyButton,
} from '@chepe/stencil-angular/dist/component-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentLibraryModule],
  providers: [MyButton],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
