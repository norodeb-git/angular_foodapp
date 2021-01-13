import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  
  private currentUserValidated : boolean;
  constructor() { }
  setCurrentUserValidated(validator : boolean){
    this.currentUserValidated = validator;
  }
  getCurrentUserValidated(){
    return this.currentUserValidated;
  }
}
