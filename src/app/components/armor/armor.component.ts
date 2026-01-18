import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavingService } from '../../services/saving.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-armor',
  imports: [CommonModule, FormsModule],
  templateUrl: './armor.component.html',
  styleUrl: './armor.component.css'
})
export class ArmorComponent {
  service = inject(SavingService);
  character: Character = this.service.character;
  

  get totalAC(): number {
    return this.character.armor.baseAC + (this.character.armor.hasShield ? 2 : 0);
  }
}
