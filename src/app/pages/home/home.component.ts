import { Component, OnInit } from '@angular/core';
import { GameInformations } from 'src/app/models/game.information';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  gameVector!: GameInformations[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameVector = this.gameService.getGames();
  }
}
