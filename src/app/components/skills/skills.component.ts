import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character, SkillProficiencies } from '../../models/character';
import { SavingService } from '../../services/saving.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
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
  @Input() proficiencyBonus: number = 2;

  skills: SkillProficiencies[] = this.character.skillProficiencies;
  skille = [
    { name: 'Acrobatics', ability: 'Dex', abilityKey: 'dex', proficient: false, expert: false },
    { name: 'Animal Handling', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false },
    { name: 'Arcana', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
    { name: 'Athletics', ability: 'Str', abilityKey: 'str', proficient: false, expert: false },
    { name: 'Deception', ability: 'Cha', abilityKey: 'cha', proficient: false, expert: false },
    { name: 'History', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
    { name: 'Insight', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false },
    { name: 'Intimidation', ability: 'Cha', abilityKey: 'cha', proficient: false, expert: false },
    { name: 'Investigation', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
    { name: 'Medicine', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false },
    { name: 'Nature', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
    { name: 'Perception', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false },
    { name: 'Performance', ability: 'Cha', abilityKey: 'cha', proficient: false, expert: false },
    { name: 'Persuasion', ability: 'Cha', abilityKey: 'cha', proficient: false, expert: false },
    { name: 'Religion', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
    { name: 'Sleight of Hand', ability: 'Dex', abilityKey: 'dex', proficient: false, expert: false },
    { name: 'Stealth', ability: 'Dex', abilityKey: 'dex', proficient: false, expert: false },
    { name: 'Survival', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false }
  ];

  getSkillModifier(skill: SkillProficiencies): number {
    const abilityMod = this.abilityModifiers[skill.abilityKey] || 0;
    if (skill.expert) {
      return abilityMod + (this.proficiencyBonus * 2);
    } else if (skill.proficient) {
      return abilityMod + this.proficiencyBonus;
    }
    return abilityMod;
  }

  toggleProficiency(skill: SkillProficiencies): void {
    if (skill.expert) {
      skill.expert = false;
      skill.proficient = true;
    } else if (skill.proficient) {
      skill.proficient = false;
    } else {
      skill.proficient = true;
    }
  }

  toggleExpert(skill: SkillProficiencies): void {
    skill.expert = !skill.expert;
    if (skill.expert) {
      skill.proficient = false;
    }
  }
}
