import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavingService } from '../../services/saving.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-health',
  imports: [CommonModule, FormsModule],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {
  service = inject(SavingService);
  character: Character = this.service.character;
  currentHP: number = 0;
  maxHP: number = 0;
  temporaryHP: number = 0;
  hitDice: string = '';

  failedDeathSaves: boolean[] = this.character.health.failedDeathSaves;
  succeededDeathSaves: boolean[] = this.character.health.succeededDeathSaves;
}
