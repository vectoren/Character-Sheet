import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavingService } from '../../services/saving.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-senses',
  imports: [CommonModule, FormsModule],
  templateUrl: './senses.component.html',
  styleUrl: './senses.component.css'
})
export class SensesComponent {
  service = inject(SavingService);
  character: Character = this.service.character;
}
