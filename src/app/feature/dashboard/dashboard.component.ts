import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router, private http : HttpClient) { }

  ngOnInit(): void {
    this.getAllRestaurant();
  }

  data : any;
  getAllRestaurant(){
    this.getRestaurant().subscribe(
      res => {this.data = res;
        console.log(this.data);
      },
      err => {console.log(err)
      localStorage.setItem("loginValid","no");}
    );
  }

  getRestaurant(): Observable<any> {
    return this.http.get("http://localhost:8080/fooddelivery/getAllRestaurant");
  }

  logoutUser(){
    localStorage.setItem("loginValid","no");
    this.router.navigate(["/home"]);
  }
  
}
