import { Component } from '@angular/core';
import { BasicInfoComponent } from './compontents/basic-info/basic-info.component';

@Component({
  selector: 'app-root',
  imports: [BasicInfoComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = 'Character-Sheet';
}
