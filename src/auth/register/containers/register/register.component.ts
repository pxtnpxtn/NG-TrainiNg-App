import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUser(event: FormGroup) {
    console.log(event.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
