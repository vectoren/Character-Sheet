export interface Character {
    characterName: string;
    playerName: string;
    characterLevel: number;
    characterClass: string;
    characterRace: string;
    background: string;
    abilityScores: {name: string; score: number}[];
    skillProficiencies: {name: string; proficient: boolean; expert: boolean}[];
    armor: {armorName: string, baseAC: number, hasShield: boolean, isStealthDisadvantage: boolean};
    movement: {name: string, value: number}[];
    health: {currentHP: number, maxHP: number, tempHP: number, hitDice: string, failedDeathSaves: boolean[], succeededDeathSaves: boolean[]};
    senses: {vision: string, inspiration: string, exhaustion: number};
    attackAmount: number;
    attacks: {weaponName: string, range: string, attack: string, isDex: boolean, isProficient: boolean, damage: string, properties: string}[];
    equipment: {itemName: string, price: string, amount: number, weight: number}[];
    proficiencies: {armor: string, weapons: string, tools: string, languages: string}[];
}
