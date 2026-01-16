import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Ability {
  name: string;
  score: number;
}

@Component({
  selector: 'app-ability-scores',
  imports: [CommonModule, FormsModule],
  templateUrl: './ability-scores.component.html',
  styleUrl: './ability-scores.component.css'
})
export class AbilityScoresComponent {
  abilities: Ability[] = [
    { name: 'STRENGTH', score: 10 },
    { name: 'DEXTERITY', score: 10 },
    { name: 'CONSTITUTION', score: 10 },
    { name: 'INTELLIGENCE', score: 10 },
    { name: 'WISDOM', score: 10 },
    { name: 'CHARISMA', score: 10 }
  ];

  getModifier(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  increaseScore(ability: Ability): void {
    if (ability.score < 20) {
      ability.score++;
    }
  }

  decreaseScore(ability: Ability): void {
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
