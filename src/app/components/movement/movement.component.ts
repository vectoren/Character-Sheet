import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MovementType {
  label: string;
  value: number | string;
}

@Component({
  selector: 'app-movement',
  imports: [CommonModule, FormsModule],
  templateUrl: './movement.component.html',
  styleUrl: './movement.component.css'
})
export class MovementComponent {
  movements: MovementType[] = [
    { label: 'Speed', value: 0 },
    { label: 'Fly', value: 0 },
    { label: 'Climb', value: 0 },
    { label: 'Swim', value: 0 }
  ];
}
