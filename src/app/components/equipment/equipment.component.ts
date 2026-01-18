import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavingService } from '../../services/saving.service';
import { Character, Equipment } from '../../models/character'; 

@Component({
  selector: 'app-equipment',
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  service = inject(SavingService);
  character: Character = this.service.character;
  equipment: Equipment[] = this.character.equipment;

  addItem(): void {
    this.equipment.push({ itemName: '', price: '', amount: 1, weight: 0 });
  }

  removeItem(index: number): void {
    if (this.equipment.length > 1) {
      this.equipment.splice(index, 1);
    }
  }
}
