import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppButtonComponent } from './button';
import { NumberCardComponent } from './number-crad';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, AppButtonComponent, NumberCardComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
