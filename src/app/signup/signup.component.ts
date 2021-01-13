import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../object/User';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData = new FormGroup({
    _userFirstName: new FormControl(''),
    _userLastName: new FormControl(''),
    _userAddress: new FormControl(''),
    _userEmail: new FormControl(''),
    _userPhoneNumber: new FormControl(''),
    _userName: new FormControl(''),
    _userPassword: new FormControl('')

  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  submit() {

    console.log("register")
    this.register(this.user).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );


  }

  user: User = {
    firstName: null,
    lastName: null,
    mobileNumber: null,
    email: null,
    address: null,
    userName: null,
    password: null
  };
  registerUser(user: any) {
    this.user.firstName = user.value._userFirstName;
    this.user.lastName = user.value._userLastName;
    this.user.mobileNumber = user.value._userPhoneNumber;
    this.user.email = user.value._userEmail;
    this.user.address = user.value._userAddress;
    this.user.userName = user.value._userName;
    this.user.password = user.value._userPassword;

    console.log(this.user);
    this.submit();
  }
  register(consumer: User): Observable<any> {
    return this.http.post("http://localhost:8080/fooddelivery/register", consumer);
  }

}
