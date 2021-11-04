import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(router: Router){
    this.router = router
  }

  router: Router

  router2Url(address: string){
      this.router.navigateByUrl('/' + address)
  }

  // title = 'trivia';
  // myVariable = 'hello';
  // names: string[] = [
  //   "Miguel", 
  //   "Camilo", 
  //   "Alejandro", 
  //   "Fabio"]

  //   addName(){
  //     this.names.push("new name")
  //   }

  //   removeName(index: number){
  //     this.names.splice(index, 1)
  //   }

  //   letters: string[] = [
  //     "a",
  //     "e",
  //     "i",
  //     "o",
  //     "u"
  //   ]

  //   answer:string = "Answer 1"

  //   isVowel(letter: string): boolean{
  //     if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
  //       return true;
  //     }
  //     return false;
  //   }

  //   answerElected(ans:any){
  //     console.log("Arrived here", ans)
  //     // this.answer = "New answer"
  //   }
}

