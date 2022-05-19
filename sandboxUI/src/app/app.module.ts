import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberSpinnerComponent } from './number-spinner/number-spinner.component';
import { ButtonContainerComponent } from './button-container/button-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberSpinnerComponent,
    ButtonContainerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
