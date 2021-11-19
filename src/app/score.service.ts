import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  players:Player [] = [
    new Player(1,"- Andrés",40),
    new Player(2,"- Felipe",30),
    new Player(3,"- Laura",20)
  ]
  constructor() { }
}
