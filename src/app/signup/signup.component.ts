import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../object/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  user: User = {

    firstName: "Sanket",
    lastName: "Annadate"
  }

  submit() {

    console.log("register")
    this.register(this.user).subscribe();
    

  }

  register(consumer: User): Observable<any> {
    return this.http.post("http://localhost:8080/fooddelivery/register", consumer);
  }

}
