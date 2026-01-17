import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EquipmentItem {
  name: string;
  price: string;
  amount: number;
  weight: number;
}

@Component({
  selector: 'app-equipment',
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  equipment: EquipmentItem[] = [
    { name: '', price: '', amount: 1, weight: 0 }
  ];

  addItem(): void {
    this.equipment.push({ name: '', price: '', amount: 1, weight: 0 });
  }

  removeItem(index: number): void {
    if (this.equipment.length > 1) {
      this.equipment.splice(index, 1);
    }
  }
}
