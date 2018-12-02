import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser(event: FormGroup) {
    console.log(event.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
