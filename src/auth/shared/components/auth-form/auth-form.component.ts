import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output()
  submitted = new EventEmitter<FormGroup>();

  // Validators
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  get emailFormat() {
    const control = this.form.get('email');
    return control.hasError('email') && control.touched;
  }

  get passwordInvalid() {
    const control = this.form.get('password');
    return control.hasError('required') && control.touched;
  }

  // Methods
  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
