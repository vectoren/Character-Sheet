import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-armor',
  imports: [CommonModule, FormsModule],
  templateUrl: './armor.component.html',
  styleUrl: './armor.component.css'
})
export class ArmorComponent {
  armorName: string = '';
  baseAC: number = 10;
  hasShield: boolean = false;
  stealthDisadvantage: boolean = false;

  get totalAC(): number {
    return this.baseAC + (this.hasShield ? 2 : 0);
  }
}
