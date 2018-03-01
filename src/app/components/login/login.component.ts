import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
}                            from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\w_.\-]+\@[\w]+\.[\w]{2,6}$/)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[\w]+[\$\#\@\!\?\*\&\%]+$/)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email : this.email,
      password :this.password
    })
  }

  handleSubmit() {
    console.log("Login form submitted");
    this.loginForm.reset();
  }

}
