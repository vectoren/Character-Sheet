import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-health',
  imports: [CommonModule, FormsModule],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {
  currentHP: number = 0;
  maxHP: number = 0;
  temporaryHP: number = 0;
  hitDice: string = '';

  failedDeathSaves: boolean[] = [false, false, false];
  succeededDeathSaves: boolean[] = [false, false, false];
}
