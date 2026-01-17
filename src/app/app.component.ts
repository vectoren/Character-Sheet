import { Component } from '@angular/core';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { AbilityScoresComponent } from './components/ability-scores/ability-scores.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MovementComponent } from './components/movement/movement.component';
import { ArmorComponent } from './components/armor/armor.component';
import { HealthComponent } from './components/health/health.component';
import { SensesComponent } from './components/senses/senses.component';
import { AttacksComponent } from './components/attacks/attacks.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { ProficienciesComponent } from './components/proficiencies/proficiencies.component';

@Component({
  selector: 'app-root',
  imports: [
    BasicInfoComponent, 
    AbilityScoresComponent, 
    SkillsComponent,
    MovementComponent,
    ArmorComponent,
    HealthComponent,
    SensesComponent,
    AttacksComponent,
    EquipmentComponent,
    ProficienciesComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = 'Character-Sheet';
}
