import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../object/Login';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = new FormGroup({
    _userName: new FormControl(''),
    _userPassword: new FormControl('')

  });



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login: Login = {
    userName: null,
    password: null

  }
  loginUser(login: any) {
    this.login.userName = login.value._userName;
    this.login.password = login.value._userPassword;
    console.log(this.login);
    this.submit();
  }

  submit() {
    console.log("register")
    this.register(this.login).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
  register(loginUser: Login): Observable<any> {
    return this.http.post("http://localhost:8080/fooddelivery/login", loginUser);
  }

}
