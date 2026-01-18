export interface AbilityScores{
    name: string; 
    score: number;
}

export interface SkillProficiencies{
    name: string; 
    ability: string;
    abilityKey: string;
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
    // attack: string;
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
    characterName: string | '';
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
    proficiencies: Proficiencies;
}

export const DEFAULT_CHARACTER: Character = {
    characterName: '',
    playerName: '',
    characterLevel: 1,
    characterClass: '',
    characterRace: '',
    background: '',
    abilityScores: [
        { name: 'Strength', score: 10 },
        { name: 'Dexterity', score: 10 },
        { name: 'Constitution', score: 10 },
        { name: 'Intelligence', score: 10 },
        { name: 'Wisdom', score: 10 },
        { name: 'Charisma', score: 10 }
    ],
    skillProficiencies: [
        { name: 'Acrobatics', ability: 'Dex', abilityKey: 'dex', proficient: false, expert: false },
        { name: 'Animal Handling', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false },
        { name: 'Arcana', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
        { name: 'Athletics', ability: 'Str', abilityKey: 'str', proficient: false, expert: false },
        { name: 'Deception', ability: 'Cha', abilityKey: 'cha', proficient: false, expert: false },
        { name: 'History', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
        { name: 'Insight', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false },
        { name: 'Intimidation', ability: 'Cha', abilityKey: 'cha', proficient: false, expert: false },
        { name: 'Investigation', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
        { name: 'Medicine', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false },
        { name: 'Nature', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
        { name: 'Perception', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false },
        { name: 'Performance', ability: 'Cha', abilityKey: 'cha', proficient: false, expert: false },
        { name: 'Persuasion', ability: 'Cha', abilityKey: 'cha', proficient: false, expert: false },
        { name: 'Religion', ability: 'Int', abilityKey: 'int', proficient: false, expert: false },
        { name: 'Sleight of Hand', ability: 'Dex', abilityKey: 'dex', proficient: false, expert: false },
        { name: 'Stealth', ability: 'Dex', abilityKey: 'dex', proficient: false, expert: false },
        { name: 'Survival', ability: 'Wis', abilityKey: 'wis', proficient: false, expert: false }
    ],
    armor: {
        armorName: 'Unarmored',
        baseAC: 10,
        hasShield: false,
        isStealthDisadvantage: false
    },
    movement: [
        { name: 'Speed', value: 30 },
        { name: 'Fly', value: 0 },
        { name: 'Climb', value: 0 },
        { name: 'Swim', value: 0 }
    ],
    health: {
        currentHP: 8,
        maxHP: 8,
        tempHP: 0,
        hitDice: '1d8',
        failedDeathSaves: [false, false, false],
        succeededDeathSaves: [false, false, false]
    },
    senses: {
        vision: 'Normal',
        inspiration: 'No',
        exhaustion: 0
    },
    attackAmount: 1,
    attacks: [],
    equipment: [],
    proficiencies: {
            armor: 'Light Armor',
            weapons: 'Simple melee weapons',
            tools: '',
            languages: 'Common'
        }
    
};
