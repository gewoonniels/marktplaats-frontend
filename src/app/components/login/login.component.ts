import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
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

  constructor(private loginService: LoginService, private router: Router, private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).pipe(catchError(err => {
      this.showError=true;
      return throwError;
    }))
    .subscribe(data => {
      if(data.status == 200){
        this.transferToHome()
        this.showError=false;
      }
    });
 }

 transferToHome(){
  this.AuthService.login();
  this.router.navigate([''])
 }

}
