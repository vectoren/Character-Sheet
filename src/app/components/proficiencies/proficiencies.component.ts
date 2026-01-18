import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavingService } from '../../services/saving.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-proficiencies',
  imports: [CommonModule, FormsModule],
  templateUrl: './proficiencies.component.html',
  styleUrl: './proficiencies.component.css'
})
export class ProficienciesComponent {
  service = inject(SavingService);
  character: Character = this.service.character;
}
