import { Component, OnInit } from '@angular/core';
import { FormGroup,
         FormControl,
         Validators
}                            from '@angular/forms';

@Component({
  selector: 'customer-lookup',
  templateUrl: './customer-lookup.component.html',
  styleUrls: ['./customer-lookup.component.scss']
})
export class CustomerLookupComponent implements OnInit {

  constructor() { }

  customerLookupForm: FormGroup;
  phoneNumber: FormControl;
  email: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.phoneNumber = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\d]{3}\-[\d]{3}(\-[\d]{4})?$/)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\w_.\-]+\@[\w]+\.[\w]{2,6}$/)
    ]);
  }

  createForm() {
    this.customerLookupForm = new FormGroup({
      phoneNumber : this.phoneNumber,
      email :this.email
    });
  }

  lookupCustomer() {
    console.log("Customer Lookup form submitted");
    this.customerLookupForm.reset();
  }

  resetForm() {
    this.customerLookupForm.reset();
  }

}
