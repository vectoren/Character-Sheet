import { Injectable } from '@angular/core';
import { Character, DEFAULT_CHARACTER } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class SavingService {
  character: Character = DEFAULT_CHARACTER;
  constructor() {
    const obj = this.getCharacter();
    this.character = obj;
  }

  save(obj: Character) {
    const blob = new Blob([JSON.stringify(obj) || ''], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'character.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    localStorage.setItem("character", JSON.stringify(obj));
  }

  load(obj: string){
    localStorage.setItem("character", obj);
    this.character = JSON.parse(obj);
  }

  getCharacter(){
    return JSON.parse(localStorage.getItem("character") || JSON.stringify(DEFAULT_CHARACTER))
  }
}
