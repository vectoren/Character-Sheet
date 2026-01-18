import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Character, Movement } from '../../models/character';
import { SavingService } from '../../services/saving.service';

@Component({
  selector: 'app-movement',
  imports: [CommonModule, FormsModule],
  templateUrl: './movement.component.html',
  styleUrl: './movement.component.css'
})
export class MovementComponent {
  service = inject(SavingService);
  character: Character = this.service.character;
  movements: Movement[] = this.character.movement;
}
