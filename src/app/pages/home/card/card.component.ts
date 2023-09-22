import { Component, Input } from '@angular/core';
import { GameInformations } from 'src/app/models/game.information';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  gameInformations!: GameInformations;
}
