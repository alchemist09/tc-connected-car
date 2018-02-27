import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { Routes, RouterModule }    from '@angular/router'


import { AppComponent }            from './app.component';
import { LoginComponent }          from './components/login/login.component';
import { CustomerLookupComponent } from './components/customer-lookup/customer-lookup.component';
import { SendPinComponent }        from './components/send-pin/send-pin.component';
import { EnterPinComponent }       from './components/enter-pin/enter-pin.component';
import { ConfirmationComponent }   from './components/confirmation/confirmation.component';
import { PageNotFoundComponent }   from './components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customer_lookup',
    component: CustomerLookupComponent
  },
  {
    path: 'send_pin',
    component: SendPinComponent
  },
  {
    path: 'enter_pin',
    component: EnterPinComponent
  },
  {
    path: 'confirm',
    component: ConfirmationComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerLookupComponent,
    SendPinComponent,
    EnterPinComponent,
    ConfirmationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
