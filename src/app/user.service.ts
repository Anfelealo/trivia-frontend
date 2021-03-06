import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './apiresponse.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string = ""
  token: string = ""
  httpClient: HttpClient
  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient
  }

  checkLoginUser(): boolean{
    const userName = localStorage.getItem("userName")
    const token = localStorage.getItem("token")
    if(userName != null && token != null){
      this.userName = userName
      this.token = token
      return true
    }
    return false
  }

  async createUserName(name: string, password: string): Promise<boolean>{
    const registerResponse: ApiResponse = await this.createRegisterRequest(name, password) 
    if(registerResponse.status == false){
      const loginResponse = await this.createLoginRequest(name, password)
      if(loginResponse.status == true){
        localStorage.setItem("userName",name)
        localStorage.setItem("token", loginResponse.data.token)
        return true
      }
      return false
    }
    localStorage.setItem("userName",name)
    localStorage.setItem("token",registerResponse.data.token)
    return true
  }

  signOut(){
    this.userName = ""
    localStorage.removeItem("userName")
  }

  async createRegisterRequest(name: String, password: String): Promise<ApiResponse> {
    const data = await this.httpClient.post("http://localhost:4001/players/register",{name,password}).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    console.log({status:json["status"],message:json["message"],data:json["data"]})
    return {status:json["status"],message:json["message"],data:json["data"]}
  }

  async createLoginRequest(name: String, password: String): Promise<ApiResponse>{
    const data = await this.httpClient.post("http://localhost:4001/players/login",{name,password}).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    console.log({status:json["status"],message:json["message"],data:json["data"]})
    return {status:json["status"],message:json["message"],data:json["data"]}
  }
}



