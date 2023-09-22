import { Injectable } from '@angular/core';
import { GameInformations } from '../models/game.information';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gamesVector!: GameInformations[];

  getGames() {
    return this.gamesVector;
  }
}
