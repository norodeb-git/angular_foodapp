import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginDataService } from '../services/login-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService implements CanActivate{
canActivate(): boolean {
  if(localStorage.getItem("loginValid")=="yes"){
    return true;
  }
  else{
    this.router.navigate(["/home"]);
    return false;
  }
}
  constructor(private loginData : LoginDataService, private router:Router) { }
}
