import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-senses',
  imports: [CommonModule, FormsModule],
  templateUrl: './senses.component.html',
  styleUrl: './senses.component.css'
})
export class SensesComponent {
  vision: string = '';
  inspiration: string = "";
  exhaustion: number = 0;
}
