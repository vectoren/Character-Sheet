export interface AbilityScores{
    name: string; 
    score: number;
}

export interface SkillProficiencies{
    name: string; 
    proficient: boolean; 
    expert: boolean;
}

export interface Armor{
    armorName: string; 
    baseAC: number; 
    hasShield: boolean; 
    isStealthDisadvantage: boolean;
}

export interface Movement{
    name: string; 
    value: number;
}

export interface Health{
    currentHP: number;
    maxHP: number;
    tempHP: number; 
    hitDice: string; 
    failedDeathSaves: boolean[]; 
    succeededDeathSaves: boolean[];
}

export interface Senses{
    vision: string;
    inspiration: string;
    exhaustion: number;
}

export interface Attacks{
    weaponName: string;
    range: string;
    attack: string;
    isDex: boolean;
    isProficient: boolean;
    damage: string;
    properties: string;
}

export interface Equipment{
    itemName: string;
    price: string;
    amount: number;
    weight: number;
}

export interface Proficiencies{
    armor: string;
    weapons: string;
    tools: string;
    languages: string
}

export interface Character {
    characterName: string;
    playerName: string;
    characterLevel: number;
    characterClass: string;
    characterRace: string;
    background: string;
    abilityScores: AbilityScores[];
    skillProficiencies: SkillProficiencies[];
    armor: Armor;
    movement: Movement[];
    health: Health;
    senses: Senses;
    attackAmount: number;
    attacks: Attacks[];
    equipment: Equipment[];
    proficiencies: Proficiencies[];
}
