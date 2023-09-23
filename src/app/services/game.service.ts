import { Injectable } from '@angular/core';
import { GameInformations } from '../models/game.information';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gamesVector: GameInformations[] = [
    {
      gameCover: '/assets/bt-1.jpg',
      gameLabel: 'Play 4 | Battle Field 1',
      gameType: 'action',
      gamePrice: 'R$ 120,00',
    },
    {
      gameCover: '/assets/bt-4.jpg',
      gameLabel: 'Play 4 | Battle Field 4',
      gameType: 'action',
      gamePrice: 'R$ 250,00',
    },
  ];

  getGames() {
    return this.gamesVector;
  }
}
