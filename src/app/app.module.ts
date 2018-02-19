import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerLookupComponent } from './components/customer-lookup/customer-lookup.component';
import { SendPinComponent } from './components/send-pin/send-pin.component';
import { EnterPinComponent } from './components/enter-pin/enter-pin.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerLookupComponent,
    SendPinComponent,
    EnterPinComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
