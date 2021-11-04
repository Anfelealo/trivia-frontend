import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userName: string = ""

  constructor() { }

  createUserName(name: string){
    this.userName = name
    console.log("Here it changes", this.userName)
  }
}
