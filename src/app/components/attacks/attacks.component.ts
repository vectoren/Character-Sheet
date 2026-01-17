import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Attack {
  name: string;
  range: string;
  damageDice: string;
  damageType: string;
  properties: string;
  useDex: boolean;
  proficient: boolean;
}

@Component({
  selector: 'app-attacks',
  imports: [CommonModule, FormsModule],
  templateUrl: './attacks.component.html',
  styleUrl: './attacks.component.css'
})
export class AttacksComponent {
  @Input() abilityModifiers: { [key: string]: number } = {
    'str': 0,
    'dex': 0,
    'con': 0,
    'int': 0,
    'wis': 0,
    'cha': 0
  };
  @Input() proficiency: number = 0; 

  attacks: Attack[] = [];
  maxAttacks: number = 4;

  addAttack(): void {
    if (this.attacks.length < this.maxAttacks) {
      this.attacks.push({
        name: '',
        range: '',
        damageDice: '',
        damageType: '',
        properties: '',
        useDex: false,
        proficient: false
      });
    }
  }

  removeAttack(index: number): void {
    this.attacks.splice(index, 1);
  }

  getAttackModifier(attack: Attack): number {
    return (attack.useDex ? this.abilityModifiers['dex'] : this.abilityModifiers['str']) + (attack.proficient ? this.proficiency : 0);
  }
}
