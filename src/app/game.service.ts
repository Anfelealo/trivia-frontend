import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentQuestion: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur et earum at voluptatem,  nulla aliquam odit sunt repellat totam quod mollitia quam in rem nesciunt rerum exercitationem dolorem."

  answerOptions: string[] = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ]

  correctAnswer: string = "Option 3"
  userService: UserService
  httpClient: HttpClient 
  constructor(userService: UserService, httpClient: HttpClient) { 
    this.userService = userService
    this.httpClient = httpClient
  }

  async getTriviaQuestion(){

  }
}
