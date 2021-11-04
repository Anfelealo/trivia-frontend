import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})

export class AnswerButtonComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit excecuted")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges excecuted", changes)
  }

  @Input() answer: string | undefined
  @Output() buttonSelected: EventEmitter<any> = new EventEmitter

  anyVariable = 0

  selectAnswer(){
    this.buttonSelected?.emit(this.answer)
    this.anyVariable++
    console.log("number ",this.anyVariable)
  }

}
