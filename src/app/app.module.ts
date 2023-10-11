import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  RadioModule,
  DatePickerModule,
  UIShellModule,
  ProgressIndicatorModule,
} from 'carbon-components-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RadioModule, DatePickerModule, UIShellModule, ProgressIndicatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
