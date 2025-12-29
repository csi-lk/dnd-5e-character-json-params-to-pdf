// Your character

export interface CharacterData {
  [key: string]: string | boolean;

  // Character Info
  classLevel: string;
  background: string;
  playerName: string;
  characterName: string;
  alignment: string;
  xp: string;
  inspiration: string;
  profBonus: string;

  // Core Stats
  str: string;
  dex: string;
  con: string;
  int: string;
  wis: string;
  cha: string;
  strMod: string;
  dexMod: string;
  conMod: string;
  intMod: string;
  wisMod: string;
  chaMod: string;

  // Combat Stats
  ac: string;
  initiative: string;
  speed: string;
  hpMax: string;
  hpCurrent: string;
  hpTemp: string;
  hdTotal: string;
  hd: string;

  // Death Saves
  deathSaveSuccess1: boolean;
  deathSaveSuccess2: boolean;
  deathSaveSuccess3: boolean;
  deathSaveFailure1: boolean;
  deathSaveFailure2: boolean;
  deathSaveFailure3: boolean;

  // Saving Throws
  stStrength: string;
  stDexterity: string;
  stConstitution: string;
  stIntelligence: string;
  stWisdom: string;
  stCharisma: string;
  stStrengthProf: boolean;
  stDexterityProf: boolean;
  stConstitutionProf: boolean;
  stIntelligenceProf: boolean;
  stWisdomProf: boolean;
  stCharismaProf: boolean;

  // Skills
  acrobatics: string;
  animalHandling: string;
  arcana: string;
  athletics: string;
  deception: string;
  history: string;
  insight: string;
  intimidation: string;
  investigation: string;
  medicine: string;
  nature: string;
  perception: string;
  performance: string;
  persuasion: string;
  religion: string;
  sleightOfHand: string;
  stealth: string;
  survival: string;

  // Skill Proficiencies
  acrobaticsProf: boolean;
  animalHandlingProf: boolean;
  arcanaProf: boolean;
  athleticsProf: boolean;
  deceptionProf: boolean;
  historyProf: boolean;
  insightProf: boolean;
  intimidationProf: boolean;
  investigationProf: boolean;
  medicineProf: boolean;
  natureProf: boolean;
  perceptionProf: boolean;
  performanceProf: boolean;
  persuasionProf: boolean;
  religionProf: boolean;
  sleightOfHandProf: boolean;
  stealthProf: boolean;
  survivalProf: boolean;

  // Weapons
  wpnName1: string;
  wpnAtkBonus1: string;
  wpnDamage1: string;
  wpnName2: string;
  wpnAtkBonus2: string;
  wpnDamage2: string;
  wpnName3: string;
  wpnAtkBonus3: string;
  wpnDamage3: string;

  // Character Traits
  personalityTraits: string;
  ideals: string;
  bonds: string;
  flaws: string;

  // Equipment and Currency
  cp: string;
  sp: string;
  ep: string;
  gp: string;
  pp: string;
  equipment: string;

  // Other
  passiveWisdom: string;
  proficienciesLang: string;
  attacksSpellcasting: string;
  featuresTraits: string;

  // Page 2
  characterName2: string;
  age: string;
  height: string;
  weight: string;
  eyes: string;
  skin: string;
  hair: string;
  characterAppearance: string;
  factionSymbolImage: string;
  allies: string;
  factionName: string;
  backstory: string;
  featTraits2: string;
  treasure: string;
  characterImage: string;

  // Page 3 (Spells)
  spellcastingClass: string;
  spellcastingAbility: string;
  spellSaveDC: string;
  spellAtkBonus: string;
  spellCantrip1: string;
  spellCantrip2: string;
  spellCantrip3: string;
  spellCantrip4: string;
  spellCantrip5: string;
  spellCantrip6: string;
  spellCantrip7: string;
  spellCantrip8: string;
  spellLevel1_1: string;
  spellLevel1_2: string;
  spellLevel1_3: string;
  spellLevel1_4: string;
  spellLevel1_5: string;
  spellLevel1_6: string;
  spellLevel1_7: string;
  spellLevel1_8: string;
  spellLevel1_9: string;
  spellLevel1_10: string;
  spellLevel1_11: string;
  spellLevel2_1: string;
  spellLevel2_2: string;
  spellLevel2_3: string;
  spellLevel2_4: string;
  spellLevel2_5: string;
  spellLevel2_6: string;
  spellLevel2_7: string;
  spellLevel2_8: string;
  spellLevel2_9: string;
  spellLevel2_10: string;
  spellLevel2_11: string;
  spellLevel2_12: string;
  spellLevel2_13: string;
  spellLevel3_1: string;
  spellLevel3_2: string;
  spellLevel3_3: string;
  spellLevel3_4: string;
  spellLevel3_5: string;
  spellLevel3_6: string;
  spellLevel3_7: string;
  spellLevel3_8: string;
  spellLevel3_9: string;
  spellLevel3_10: string;
  spellLevel3_11: string;
  spellLevel3_12: string;
  spellLevel3_13: string;
  spellLevel4_1: string;
  spellLevel4_2: string;
  spellLevel4_3: string;
  spellLevel4_4: string;
  spellLevel4_5: string;
  spellLevel4_6: string;
  spellLevel4_7: string;
  spellLevel4_8: string;
  spellLevel4_9: string;
  spellLevel4_10: string;
  spellLevel4_11: string;
  spellLevel4_12: string;
  spellLevel7_1: string;
  spellLevel7_2: string;
  spellLevel7_3: string;
  spellLevel7_4: string;
  spellLevel7_5: string;
  spellLevel7_6: string;
  spellLevel7_7: string;
  spellLevel7_8: string;
}

export const yourCharacter: CharacterData = {
  classLevel: "Artificer 10 (Battle Smith)",
  background: "Rebel Engineer",
  playerName: "Callum",
  characterName: "Rezonator (\"Rez\")",
  alignment: "Chaotic Good",
  xp: "0",
  inspiration: "",
  profBonus: "+4",

  // Core Stats
  str: "10",
  dex: "14",
  con: "16",
  int: "18",
  wis: "12",
  cha: "10",
  strMod: "+0",
  dexMod: "+2",
  conMod: "+3",
  intMod: "+4",
  wisMod: "+1",
  chaMod: "+0",

  // Combat Stats
  ac: "19",
  initiative: "+2",
  speed: "30",
  hpMax: "90",
  hpCurrent: "90",
  hpTemp: "",
  hdTotal: "10d8",
  hd: "d8",

  // Death Saves
  deathSaveSuccess1: false,
  deathSaveSuccess2: false,
  deathSaveSuccess3: false,
  deathSaveFailure1: false,
  deathSaveFailure2: false,
  deathSaveFailure3: false,

  // Saving Throws
  stStrength: "+0",
  stDexterity: "+2",
  stConstitution: "+7",
  stIntelligence: "+8",
  stWisdom: "+1",
  stCharisma: "+0",
  stStrengthProf: false,
  stDexterityProf: false,
  stConstitutionProf: true,
  stIntelligenceProf: true,
  stWisdomProf: false,
  stCharismaProf: false,

  // Skills
  acrobatics: "+2",
  animalHandling: "+1",
  arcana: "+8",
  athletics: "+4",
  deception: "+0",
  history: "+4",
  insight: "+1",
  intimidation: "+0",
  investigation: "+8",
  medicine: "+1",
  nature: "+4",
  perception: "+5",
  performance: "+0",
  persuasion: "+0",
  religion: "+4",
  sleightOfHand: "+2",
  stealth: "+2",
  survival: "+1",

  // Skill Proficiencies
  acrobaticsProf: false,
  animalHandlingProf: false,
  arcanaProf: true,
  athleticsProf: true,
  deceptionProf: false,
  historyProf: false,
  insightProf: false,
  intimidationProf: false,
  investigationProf: true,
  medicineProf: false,
  natureProf: false,
  perceptionProf: true,
  performanceProf: false,
  persuasionProf: false,
  religionProf: false,
  sleightOfHandProf: false,
  stealthProf: false,
  survivalProf: false,

  // Weapons
  wpnName1: "Arm-mounted Repeating Sonic Blaster",
  wpnAtkBonus1: "+8",
  wpnDamage1: "1d8+4 Force",
  wpnName2: "Staff of Power",
  wpnAtkBonus2: "+8",
  wpnDamage2: "1d6+4 Bludgeoning",
  wpnName3: "AMPY – Force-Empowered Rend",
  wpnAtkBonus3: "+7",
  wpnDamage3: "1d8+4 Force",

  // Character Traits
  personalityTraits: "Curious about every sound.",
  ideals: "Freedom through noise. Perfection is a prison.",
  bonds: "AMPY is my anchor and my amplifier. If it falls, I rebuild it.",
  flaws: "Cannot resist pressing buttons marked DO NOT PRESS. Overclocks gear for style points.",

  // Equipment and Currency
  cp: "0",
  sp: "0",
  ep: "0",
  gp: "0",
  pp: "0",
  equipment:
    "Plate Armor\n" +
    "Shield\n" +
    "Arm-mounted Repeating Sonic Blaster (Enhanced Weapon, Repeating Shot)\n" +
    "Staff of Power (Legendary)\n" +
    "Cloak of Displacement (Very Rare)\n" +
    "Tinker's Tools\n" +
    "Smith's Tools\n" +
    "Thieves' Tools",

  // Other
  passiveWisdom: "15",
  proficienciesLang:
    "Armor: Light armor, medium armor, shields\n" +
    "Weapons: Simple weapons\n" +
    "Tools: Tinker's tools, Smith's tools, Thieves' tools\n\n" +
    "Languages: Common\n\n" +
    "Proficiencies: Arcana, Athletics, Investigation, Perception",

  attacksSpellcasting:
    "Repeating Sonic Blaster: +8 to hit, 1d8+4 force damage.\n" +
    "Staff of Power: +8 to hit, 1d6+4 bludgeoning damage.\n" +
    "Spells: Spell Save DC 16, +8 to hit with spell attacks.\n\n" +
    "Spell Flavor Notes:\n" +
    "Cure Wounds = Healing Frequency v2.1\n" +
    "Shield = Phase Barrier Emitter\n" +
    "Absorb Elements = Static Surge Capture\n" +
    "Heat Metal = Overheat Subroutine\n" +
    "Magic Weapon = Weapon Amplifier Mk II\n" +
    "Thunderwave = Bass Drop Protocol\n" +
    "Dispel Magic = Dissonance Purge\n" +
    "Aura of Vitality = Harmonic Field Generator",

  featuresTraits:
    "Warforged: Constructed Resilience, Integrated Protection\n" +
    "Artificer: Magical Tinkering, Spellcasting, Infuse Item\n" +
    "Battle Smith: Battle Ready (INT for weapon attacks), Steel Defender (AMPY)\n" +
    "Extra Attack\n" +
    "Infusions: Enhanced Defense, Enhanced Weapon, Repeating Shot, Mind Sharpener",

  // Page 2
  characterName2: "Rezonator (\"Rez\")",
  age: "Unknown (Constructed)",
  height: "6'2\"",
  weight: "260 lbs",
  eyes: "Glowing Blue",
  skin: "Black-chrome plating with etched circuit runes",
  hair: "None",
  characterAppearance:
    "Androgynous black-chrome warforged with glowing teal circuitry, blue optics, a humming chest core, and an integrated sonic weapon.",
  factionSymbolImage: "",
  allies: "AMPY (Steel Defender)\nFellow Prisoners (Party)",
  factionName: "The Dissonant Rebellion",
  backstory:
    "Forged to maintain the empire's Perfect Chord, Rezonator uncovered the hidden cost: bound spirits powering Faranca's spires. " +
    "Rez struck the forbidden frequency and triggered a resonance cascade, shattering crystal towers and freeing the spirits. " +
    "Declared a disharmonic weapon, Rez was dismantled and locked in the High King's private vault.",
  featTraits2:
    "Techno-paladin of sound and rebellion.\n" +
    "Uses an iPad-based control deck and AMPY sound effects at the table.\n" +
    "Motto: \"Rhythm is order. Noise is freedom.\"",
  treasure:
    "Staff of Power (Legendary)\n" +
    "Cloak of Displacement (Very Rare)",
  characterImage: "",

  // Page 3 (Spells)
  spellcastingClass: "Artificer",
  spellcastingAbility: "Intelligence",
  spellSaveDC: "16",
  spellAtkBonus: "+8",

  spellCantrip1: "Thunderclap",
  spellCantrip2: "Mending",
  spellCantrip3: "Blade Ward",
  spellCantrip4: "",
  spellCantrip5: "",
  spellCantrip6: "",
  spellCantrip7: "",
  spellCantrip8: "",

  spellLevel1_1: "Cure Wounds",
  spellLevel1_2: "Shield",
  spellLevel1_3: "Absorb Elements",
  spellLevel1_4: "",
  spellLevel1_5: "",
  spellLevel1_6: "",
  spellLevel1_7: "",
  spellLevel1_8: "",
  spellLevel1_9: "",
  spellLevel1_10: "",
  spellLevel1_11: "",

  spellLevel2_1: "Heat Metal",
  spellLevel2_2: "Magic Weapon",
  spellLevel2_3: "",
  spellLevel2_4: "",
  spellLevel2_5: "",
  spellLevel2_6: "",
  spellLevel2_7: "",
  spellLevel2_8: "",
  spellLevel2_9: "",
  spellLevel2_10: "",
  spellLevel2_11: "",
  spellLevel2_12: "",
  spellLevel2_13: "",

  spellLevel3_1: "Thunderwave",
  spellLevel3_2: "Dispel Magic",
  spellLevel3_3: "",
  spellLevel3_4: "",
  spellLevel3_5: "",
  spellLevel3_6: "",
  spellLevel3_7: "",
  spellLevel3_8: "",
  spellLevel3_9: "",
  spellLevel3_10: "",
  spellLevel3_11: "",
  spellLevel3_12: "",
  spellLevel3_13: "",

  spellLevel4_1: "Aura of Vitality",
  spellLevel4_2: "",
  spellLevel4_3: "",
  spellLevel4_4: "",
  spellLevel4_5: "",
  spellLevel4_6: "",
  spellLevel4_7: "",
  spellLevel4_8: "",
  spellLevel4_9: "",
  spellLevel4_10: "",
  spellLevel4_11: "",
  spellLevel4_12: "",

  spellLevel7_1: "",
  spellLevel7_2: "",
  spellLevel7_3: "",
  spellLevel7_4: "",
  spellLevel7_5: "",
  spellLevel7_6: "",
  spellLevel7_7: "",
  spellLevel7_8: "",
};
