import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    // all fields
    emailadres: new FormControl(),
    wachtwoord: new FormControl(),
    }); 

    showError = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.loginForm.value);
    this.loginService.loginEvent$.subscribe(data => {
      data === true ? 
      this.router.navigate([""]) : this.showError = false;
      console.log(data);
    }
      );
 }

}
