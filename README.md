# D&D 5E Character Sheet PDF Generator

Generates filled D&D 5E character sheet PDFs from TypeScript character data.

## Prerequisites

- Node.js 22.6.0+ (for `--experimental-strip-types` support)
- npm

## Installation

```bash
git clone https://github.com/your-username/dnd-5e-character-json-params-to-pdf.git
cd dnd-5e-character-json-params-to-pdf
npm install
```

## Usage

1. Edit `your-character.ts` with your character's information
2. Run `npm run generate`
3. Find your PDF in `output/[Character Name] Character Sheet.pdf`

## LLM Character Generation

Use this prompt with any LLM to generate a character file:

```
Generate a D&D 5E character as a TypeScript export matching this interface. Create a complete, creative character with all fields filled in. Use the CharacterData interface below:

export interface CharacterData {
  // Character Info
  classLevel: string;  // e.g., "Wizard 5" or "Fighter 3 / Rogue 2"
  background: string;
  playerName: string;
  characterName: string;
  alignment: string;  // e.g., "Chaotic Good"
  xp: string;
  inspiration: string;
  profBonus: string;  // e.g., "+3"

  // Core Stats (10-20 range typical)
  str: string; dex: string; con: string; int: string; wis: string; cha: string;
  // Modifiers (calculated from stats)
  strMod: string; dexMod: string; conMod: string; intMod: string; wisMod: string; chaMod: string;

  // Combat Stats
  ac: string; initiative: string; speed: string;
  hpMax: string; hpCurrent: string; hpTemp: string;
  hdTotal: string;  // e.g., "5d8"
  hd: string;  // e.g., "d8"

  // Death Saves (true/false)
  deathSaveSuccess1: boolean; deathSaveSuccess2: boolean; deathSaveSuccess3: boolean;
  deathSaveFailure1: boolean; deathSaveFailure2: boolean; deathSaveFailure3: boolean;

  // Saving Throws (with modifiers like "+5")
  stStrength: string; stDexterity: string; stConstitution: string;
  stIntelligence: string; stWisdom: string; stCharisma: string;
  // Saving Throw Proficiencies (true/false)
  stStrengthProf: boolean; stDexterityProf: boolean; stConstitutionProf: boolean;
  stIntelligenceProf: boolean; stWisdomProf: boolean; stCharismaProf: boolean;

  // Skills (with modifiers like "+7")
  acrobatics: string; animalHandling: string; arcana: string; athletics: string;
  deception: string; history: string; insight: string; intimidation: string;
  investigation: string; medicine: string; nature: string; perception: string;
  performance: string; persuasion: string; religion: string; sleightOfHand: string;
  stealth: string; survival: string;
  // Skill Proficiencies (true/false)
  acrobaticsProf: boolean; animalHandlingProf: boolean; arcanaProf: boolean;
  athleticsProf: boolean; deceptionProf: boolean; historyProf: boolean;
  insightProf: boolean; intimidationProf: boolean; investigationProf: boolean;
  medicineProf: boolean; natureProf: boolean; perceptionProf: boolean;
  performanceProf: boolean; persuasionProf: boolean; religionProf: boolean;
  sleightOfHandProf: boolean; stealthProf: boolean; survivalProf: boolean;

  // Weapons (3 weapon slots)
  wpnName1: string; wpnAtkBonus1: string; wpnDamage1: string;
  wpnName2: string; wpnAtkBonus2: string; wpnDamage2: string;
  wpnName3: string; wpnAtkBonus3: string; wpnDamage3: string;

  // Character Traits
  personalityTraits: string;  // e.g., "Curious and enthusiastic"
  ideals: string;
  bonds: string;
  flaws: string;

  // Currency
  cp: string; sp: string; ep: string; gp: string; pp: string;

  // Equipment (multi-line string with \\n separators)
  equipment: string;

  // Other Stats
  passiveWisdom: string;
  proficienciesLang: string;  // Multi-line: armor, weapons, tools, languages
  attacksSpellcasting: string;  // Multi-line attack and spell descriptions
  featuresTraits: string;  // Class features, racial traits, feats

  // Page 2 - Character Details
  characterName2: string;  // Usually same as characterName
  age: string; height: string; weight: string;
  eyes: string; skin: string; hair: string;
  characterAppearance: string;  // Full physical description
  factionSymbolImage: string;  // Usually empty
  allies: string;
  factionName: string;
  backstory: string;  // Multi-line backstory
  featTraits2: string;  // Additional features/notes
  treasure: string;  // Magical items, special possessions
  characterImage: string;  // Usually empty

  // Page 3 - Spellcasting
  spellcastingClass: string;  // e.g., "Wizard", "Cleric"
  spellcastingAbility: string;  // e.g., "Intelligence", "Wisdom"
  spellSaveDC: string;
  spellAtkBonus: string;

  // Cantrips (8 slots)
  spellCantrip1: string; spellCantrip2: string; spellCantrip3: string; spellCantrip4: string;
  spellCantrip5: string; spellCantrip6: string; spellCantrip7: string; spellCantrip8: string;

  // Level 1 Spells (11 slots)
  spellLevel1_1: string; spellLevel1_2: string; spellLevel1_3: string; spellLevel1_4: string;
  spellLevel1_5: string; spellLevel1_6: string; spellLevel1_7: string; spellLevel1_8: string;
  spellLevel1_9: string; spellLevel1_10: string; spellLevel1_11: string;

  // Level 2 Spells (13 slots)
  spellLevel2_1: string; spellLevel2_2: string; spellLevel2_3: string; spellLevel2_4: string;
  spellLevel2_5: string; spellLevel2_6: string; spellLevel2_7: string; spellLevel2_8: string;
  spellLevel2_9: string; spellLevel2_10: string; spellLevel2_11: string; spellLevel2_12: string;
  spellLevel2_13: string;

  // Level 3 Spells (13 slots)
  spellLevel3_1: string; spellLevel3_2: string; spellLevel3_3: string; spellLevel3_4: string;
  spellLevel3_5: string; spellLevel3_6: string; spellLevel3_7: string; spellLevel3_8: string;
  spellLevel3_9: string; spellLevel3_10: string; spellLevel3_11: string; spellLevel3_12: string;
  spellLevel3_13: string;

  // Level 4 Spells (12 slots)
  spellLevel4_1: string; spellLevel4_2: string; spellLevel4_3: string; spellLevel4_4: string;
  spellLevel4_5: string; spellLevel4_6: string; spellLevel4_7: string; spellLevel4_8: string;
  spellLevel4_9: string; spellLevel4_10: string; spellLevel4_11: string; spellLevel4_12: string;

  // Level 7 Spells (8 slots) - Note: Levels 5, 6, 8, 9 not included in this PDF template
  spellLevel7_1: string; spellLevel7_2: string; spellLevel7_3: string; spellLevel7_4: string;
  spellLevel7_5: string; spellLevel7_6: string; spellLevel7_7: string; spellLevel7_8: string;
}

Generate a character export in this format:
export const yourCharacter: CharacterData = {
  // ... all fields filled in
};

Make it creative and complete. Use empty strings "" for unused spell slots or fields that don't apply.
```

## Project Structure

```
.
├── src/
│   ├── generate-character-sheet.ts   # Generator script
│   └── 5E_CharacterSheet_Fillable.pdf # PDF template
├── output/                            # Generated PDFs
├── your-character.ts                  # Your character data
└── package.json
```

## TypeScript Support

Uses Node's `--experimental-strip-types` flag. No build step required.
