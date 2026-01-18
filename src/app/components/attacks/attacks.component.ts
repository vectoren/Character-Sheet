import { Component, inject, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Attacks, Character } from '../../models/character';
import { InjectSetupWrapper } from '@angular/core/testing';
import { SavingService } from '../../services/saving.service';

@Component({
  selector: 'app-attacks',
  imports: [CommonModule, FormsModule],
  templateUrl: './attacks.component.html',
  styleUrl: './attacks.component.css'
})
export class AttacksComponent {
  service = inject(SavingService);
  character: Character = this.service.character;
  @Input() abilityModifiers: { [key: string]: number } = {
    'str': 0,
    'dex': 0,
    'con': 0,
    'int': 0,
    'wis': 0,
    'cha': 0
  };
  @Input() proficiency: number = 0; 

  attacks: Attacks[] = this.character.attacks;
  maxAttacks: number = 4;

  addAttack(): void {
    if (this.attacks.length < this.maxAttacks) {
      this.attacks.push({
        weaponName: '',
        range: '',
        // attack: '',
        damage: '',
        properties: '',
        isDex: false,
        isProficient: false
      });
    }
  }

  removeAttack(index: number): void {
    this.attacks.splice(index, 1);
  }

  getAttackModifier(attack: Attacks): number {
    return (attack.isDex ? this.abilityModifiers['dex'] : this.abilityModifiers['str']) + (attack.isProficient ? this.proficiency : 0);
  }

  getDamageModifier(attack: Attacks): number{
    return (attack.isDex ? this.abilityModifiers['dex'] : this.abilityModifiers['str'])
  }
}
