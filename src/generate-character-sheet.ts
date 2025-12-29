#!/usr/bin/env node

import { PDFDocument } from 'pdf-lib';
import { readFileSync, writeFileSync } from 'fs';
import { yourCharacter, type CharacterData } from '../your-character.ts';

// PDF field name mappings (same as index.html)
const pdfInputNames: Record<string, string> = {
  // Character Info
  classLevel: 'ClassLevel',
  background: 'Background',
  playerName: 'PlayerName',
  characterName: 'CharacterName',
  alignment: 'Alignment',
  xp: 'XP',
  inspiration: 'Inspiration',
  profBonus: 'ProfBonus',

  // Core Stats
  str: 'STR',
  dex: 'DEX',
  con: 'CON',
  int: 'INT',
  wis: 'WIS',
  cha: 'CHA',
  strMod: 'STRmod',
  dexMod: 'DEXmod',
  conMod: 'CONmod',
  intMod: 'INTmod',
  wisMod: 'WISmod',
  chaMod: 'CHamod',

  // Combat Stats
  ac: 'AC',
  initiative: 'Initiative',
  speed: 'Speed',
  hpMax: 'HPMax',
  hpCurrent: 'HPCurrent',
  hpTemp: 'HPTemp',
  hdTotal: 'HDTotal',
  hd: 'HD',

  // Death Saves
  deathSaveSuccess1: 'Check Box 12',
  deathSaveSuccess2: 'Check Box 13',
  deathSaveSuccess3: 'Check Box 14',
  deathSaveFailure1: 'Check Box 15',
  deathSaveFailure2: 'Check Box 16',
  deathSaveFailure3: 'Check Box 17',

  // Saving Throws
  stStrength: 'ST Strength',
  stDexterity: 'ST Dexterity',
  stConstitution: 'ST Constitution',
  stIntelligence: 'ST Intelligence',
  stWisdom: 'ST Wisdom',
  stCharisma: 'ST Charisma',
  stStrengthProf: 'Check Box 11',
  stDexterityProf: 'Check Box 18',
  stConstitutionProf: 'Check Box 19',
  stIntelligenceProf: 'Check Box 20',
  stWisdomProf: 'Check Box 21',
  stCharismaProf: 'Check Box 22',

  // Skills
  acrobatics: 'Acrobatics',
  animalHandling: 'Animal',
  arcana: 'Arcana',
  athletics: 'Athletics',
  deception: 'Deception',
  history: 'History',
  insight: 'Insight',
  intimidation: 'Intimidation',
  investigation: 'Investigation',
  medicine: 'Medicine',
  nature: 'Nature',
  perception: 'Perception',
  performance: 'Performance',
  persuasion: 'Persuasion',
  religion: 'Religion',
  sleightOfHand: 'SleightofHand',
  stealth: 'Stealth',
  survival: 'Survival',

  // Skill Proficiencies
  acrobaticsProf: 'Check Box 23',
  animalHandlingProf: 'Check Box 24',
  arcanaProf: 'Check Box 25',
  athleticsProf: 'Check Box 26',
  deceptionProf: 'Check Box 27',
  historyProf: 'Check Box 28',
  insightProf: 'Check Box 29',
  intimidationProf: 'Check Box 30',
  investigationProf: 'Check Box 31',
  medicineProf: 'Check Box 32',
  natureProf: 'Check Box 33',
  perceptionProf: 'Check Box 34',
  performanceProf: 'Check Box 35',
  persuasionProf: 'Check Box 36',
  religionProf: 'Check Box 37',
  sleightOfHandProf: 'Check Box 38',
  stealthProf: 'Check Box 39',
  survivalProf: 'Check Box 40',

  // Weapons
  wpnName1: 'Wpn Name',
  wpnAtkBonus1: 'Wpn1 AtkBonus',
  wpnDamage1: 'Wpn1 Damage',
  wpnName2: 'Wpn Name 2',
  wpnAtkBonus2: 'Wpn2 AtkBonus',
  wpnDamage2: 'Wpn2 Damage',
  wpnName3: 'Wpn Name 3',
  wpnAtkBonus3: 'Wpn3 AtkBonus',
  wpnDamage3: 'Wpn3 Damage',

  // Character Traits
  personalityTraits: 'PersonalityTraits ',
  ideals: 'Ideals',
  bonds: 'Bonds',
  flaws: 'Flaws',

  // Equipment and Currency
  cp: 'CP',
  sp: 'SP',
  ep: 'EP',
  gp: 'GP',
  pp: 'PP',
  equipment: 'Equipment',

  // Other
  passiveWisdom: 'Passive',
  proficienciesLang: 'ProficienciesLang',
  attacksSpellcasting: 'AttacksSpellcasting',
  featuresTraits: 'Features and Traits',

  // Page 2
  characterName2: 'CharacterName 2',
  age: 'Age',
  height: 'Height',
  weight: 'Weight',
  eyes: 'Eyes',
  skin: 'Skin',
  hair: 'Hair',
  factionSymbolImage: 'Faction Symbol Image',
  allies: 'Allies',
  factionName: 'FactionName',
  backstory: 'Backstory',
  featTraits2: 'Feat+Traits',
  treasure: 'Treasure',
  characterImage: 'CHARACTER IMAGE',

  // Page 3 (Spells)
  spellcastingClass: 'Spellcasting Class 2',
  spellcastingAbility: 'SpellcastingAbility 2',
  spellSaveDC: 'SpellSaveDC  2',
  spellAtkBonus: 'SpellAtkBonus 2',
  spellCantrip1: 'Spells 1014',
  spellCantrip2: 'Spells 1015',
  spellCantrip3: 'Spells 1016',
  spellCantrip4: 'Spells 1017',
  spellCantrip5: 'Spells 1018',
  spellCantrip6: 'Spells 1019',
  spellCantrip7: 'Spells 1020',
  spellCantrip8: 'Spells 1021',
  spellLevel1_1: 'Spells 1022',
  spellLevel1_2: 'Spells 1023',
  spellLevel1_3: 'Spells 1024',
  spellLevel1_4: 'Spells 1025',
  spellLevel1_5: 'Spells 1026',
  spellLevel1_6: 'Spells 1027',
  spellLevel1_7: 'Spells 1028',
  spellLevel1_8: 'Spells 1029',
  spellLevel1_9: 'Spells 1030',
  spellLevel1_10: 'Spells 1031',
  spellLevel1_11: 'Spells 1032',
  spellLevel2_1: 'Spells 1034',
  spellLevel2_2: 'Spells 1035',
  spellLevel2_3: 'Spells 1036',
  spellLevel2_4: 'Spells 1037',
  spellLevel2_5: 'Spells 1038',
  spellLevel2_6: 'Spells 1039',
  spellLevel2_7: 'Spells 1040',
  spellLevel2_8: 'Spells 1041',
  spellLevel2_9: 'Spells 1042',
  spellLevel2_10: 'Spells 1043',
  spellLevel2_11: 'Spells 1044',
  spellLevel2_12: 'Spells 1045',
  spellLevel2_13: 'Spells 1046',
  spellLevel3_1: 'Spells 1047',
  spellLevel3_2: 'Spells 1048',
  spellLevel3_3: 'Spells 1049',
  spellLevel3_4: 'Spells 1050',
  spellLevel3_5: 'Spells 1051',
  spellLevel3_6: 'Spells 1052',
  spellLevel3_7: 'Spells 1053',
  spellLevel3_8: 'Spells 1054',
  spellLevel3_9: 'Spells 1055',
  spellLevel3_10: 'Spells 1056',
  spellLevel3_11: 'Spells 1057',
  spellLevel3_12: 'Spells 1058',
  spellLevel3_13: 'Spells 1059',
  spellLevel4_1: 'Spells 1060',
  spellLevel4_2: 'Spells 1061',
  spellLevel4_3: 'Spells 1062',
  spellLevel4_4: 'Spells 1063',
  spellLevel4_5: 'Spells 1064',
  spellLevel4_6: 'Spells 1065',
  spellLevel4_7: 'Spells 1066',
  spellLevel4_8: 'Spells 1067',
  spellLevel4_9: 'Spells 1068',
  spellLevel4_10: 'Spells 1069',
  spellLevel4_11: 'Spells 1070',
  spellLevel4_12: 'Spells 1071',
  spellLevel7_1: 'Spells 1091',
  spellLevel7_2: 'Spells 1092',
  spellLevel7_3: 'Spells 1093',
  spellLevel7_4: 'Spells 1094',
  spellLevel7_5: 'Spells 1095',
  spellLevel7_6: 'Spells 1096',
  spellLevel7_7: 'Spells 1097',
  spellLevel7_8: 'Spells 1098',
};

async function generateCharacterSheet(
  characterData: CharacterData,
  templatePath: string = 'src/5E_CharacterSheet_Fillable.pdf',
  outputDir: string = 'output'
): Promise<string> {
  try {
    // Read the PDF template
    console.log('Loading PDF template...');
    const existingPdfBytes = readFileSync(templatePath);

    // Load PDF with pdf-lib
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const form = pdfDoc.getForm();

    // Fill PDF fields
    console.log('Filling PDF fields with character data...');
    let filledCount = 0;
    let skippedCount = 0;

    Object.keys(pdfInputNames).forEach((dataKey) => {
      const pdfName = pdfInputNames[dataKey];
      const value = characterData[dataKey];

      // Skip if no value
      if (value === undefined || value === null || value === '') {
        return;
      }

      try {
        // Try as text field first
        try {
          const textField = form.getTextField(pdfName);
          textField.setText(String(value));
          filledCount++;
          return;
        } catch (e) {
          // Not a text field, try checkbox
        }

        // Try as checkbox
        if (typeof value === 'boolean') {
          try {
            const checkBox = form.getCheckBox(pdfName);
            if (value === true) {
              checkBox.check();
              filledCount++;
            }
            return;
          } catch (e) {
            // Not a checkbox either
          }
        }

        // Field not found
        console.warn(`Warning: PDF field "${pdfName}" for "${dataKey}" not found or unsupported type`);
        skippedCount++;
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'Unknown error';
        console.error(`Error filling field "${pdfName}": ${errorMessage}`);
        skippedCount++;
      }
    });

    // Handle characterAppearance - prepend to Feat+Traits field
    if (characterData.characterAppearance) {
      try {
        const featTraitsField = form.getTextField('Feat+Traits');
        const currentValue = characterData.featTraits2 || '';
        const newValue = `APPEARANCE:\n${characterData.characterAppearance}\n\n${currentValue}`;
        featTraitsField.setText(newValue);
        console.log('Added character appearance to Feat+Traits field');
      } catch (e) {
        console.warn('Could not add character appearance to PDF');
      }
    }

    console.log(`Successfully filled ${filledCount} fields`);
    if (skippedCount > 0) {
      console.log(`Skipped ${skippedCount} fields due to errors or missing fields`);
    }

    // Save the PDF
    const pdfBytes = await pdfDoc.save();

    // Create filename from character name
    const characterName = characterData.characterName || 'Character';
    const outputFilename = `${outputDir}/${characterName} Character Sheet.pdf`;

    // Write the PDF to file
    writeFileSync(outputFilename, pdfBytes);

    console.log(`\n✓ Character sheet generated successfully!`);
    console.log(`  Output: ${outputFilename}`);

    return outputFilename;
  } catch (error) {
    console.error('Error generating character sheet:', error);
    throw error;
  }
}

// Main execution
(async () => {
  try {
    await generateCharacterSheet(yourCharacter);
  } catch (error) {
    process.exit(1);
  }
})();
