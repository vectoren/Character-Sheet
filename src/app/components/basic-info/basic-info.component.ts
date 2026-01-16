import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ProficiencyLevel{
    level: number;
    experiencePoints: number;
    proficiencyBonus: number;
}

@Component({
  selector: 'app-basic-info',
  imports: [FormsModule],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent {
    characterLevel: number = 1; 
    proficiencyTable: ProficiencyLevel[] = [
        { level: 1, experiencePoints: 0, proficiencyBonus: 2 },
        { level: 2, experiencePoints: 300, proficiencyBonus: 2 },
        { level: 3, experiencePoints: 900, proficiencyBonus: 2 },
        { level: 4, experiencePoints: 2700, proficiencyBonus: 2 },
        { level: 5, experiencePoints: 6500, proficiencyBonus: 3 },
        { level: 6, experiencePoints: 14000, proficiencyBonus: 3 },
        { level: 7, experiencePoints: 23000, proficiencyBonus: 3 },
        { level: 8, experiencePoints: 34000, proficiencyBonus: 3 },
        { level: 9, experiencePoints: 48000, proficiencyBonus: 4 },
        { level: 10, experiencePoints: 64000, proficiencyBonus: 4 },
        { level: 11, experiencePoints: 85000, proficiencyBonus: 4 },
        { level: 12, experiencePoints: 100000, proficiencyBonus: 4 },
        { level: 13, experiencePoints: 120000, proficiencyBonus: 5 },
        { level: 14, experiencePoints: 140000, proficiencyBonus: 5 },
        { level: 15, experiencePoints: 165000, proficiencyBonus: 5 },
        { level: 16, experiencePoints: 195000, proficiencyBonus: 5 },
        { level: 17, experiencePoints: 225000, proficiencyBonus: 6 },
        { level: 18, experiencePoints: 265000, proficiencyBonus: 6 },
        { level: 19, experiencePoints: 305000, proficiencyBonus: 6 },
        { level: 20, experiencePoints: 355000, proficiencyBonus: 6 }
    ];

    get proficiency(): number {
        const levelData = this.proficiencyTable.find(entry => entry.level === this.characterLevel);
        return levelData ? levelData.proficiencyBonus : 2;
    }
}
