import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbilityScores, Character } from '../../models/character';
import { SavingService } from '../../services/saving.service';

@Component({
  selector: 'app-ability-scores',
  imports: [CommonModule, FormsModule],
  templateUrl: './ability-scores.component.html',
  styleUrl: './ability-scores.component.css'
})
export class AbilityScoresComponent {
  service = inject(SavingService);
  character: Character = this.service.character;
  abilities: AbilityScores[] = this.character.abilityScores;

  getModifier(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  increaseScore(ability: AbilityScores): void {
    if (ability.score < 20) {
      ability.score++;
    }
  }

  decreaseScore(ability: AbilityScores): void {
    if (ability.score > 3) {
      ability.score--;
    }
  }

  getAbilityModifiers(): { [key: string]: number } {
    return {
      'str': this.getModifier(this.abilities[0].score),
      'dex': this.getModifier(this.abilities[1].score),
      'con': this.getModifier(this.abilities[2].score),
      'int': this.getModifier(this.abilities[3].score),
      'wis': this.getModifier(this.abilities[4].score),
      'cha': this.getModifier(this.abilities[5].score)
    };
  }
}
