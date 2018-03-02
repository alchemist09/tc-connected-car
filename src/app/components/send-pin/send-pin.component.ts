import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
}                            from '@angular/forms';

@Component({
  selector: 'send-pin',
  templateUrl: './send-pin.component.html',
  styleUrls: ['./send-pin.component.scss']
})
export class SendPinComponent implements OnInit {

  constructor() { }

  sendPinForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm()
  }

  createFormControls() {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\w]{2,}$/)
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\w_.\-]{2,}$/)
    ]);
  }

  createForm() {
    this.sendPinForm = new FormGroup({
      firstName : this.firstName,
      lastName :this.lastName
    });
  }

  sendPin() {
    console.log("Send Pin form submitted");
    this.sendPinForm.reset();
  }

  resetForm() {
    this.sendPinForm.reset();
  }

}
