import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proficiencies',
  imports: [CommonModule, FormsModule],
  templateUrl: './proficiencies.component.html',
  styleUrl: './proficiencies.component.css'
})
export class ProficienciesComponent {
  armorProficiencies: string = '';
  weaponProficiencies: string = '';
  toolProficiencies: string = '';
  knownLanguages: string = '';
}
