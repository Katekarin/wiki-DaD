const enemys = [
  {
    name: "Zombie",
    type: "enemy",
    description: "Ignores 1 damage from any source",
    strength: 2,
    agility: 1,
    endurance: 2,
    wisdom: 1,
    intuition: 1,
    hp: 12,
    attacks: [
      { name: "Rotting Grasp", info: "Physical  HIT: AGI + 1 - ennemy shield  DMG: STR * 2" },
      { name: "Swing", info: "Physical  HIT: AGI-1  DMG: STR + 2" },
      { name: "Spoilage Burst", info: "Magical  HIT: AGI  DMG: END +1 (AoE)  All targets hit LOSES 1 AGI this fight" }
    ],
    image: "zombie"
  },
  {
    name: "Skeleton",
    type: "enemy",
    description: "Takes +1 damage from physical weapons",
    strength: 1,
    agility: 2,
    endurance: 1,
    wisdom: 1,
    intuition: 1,
    hp: 10,
    attacks: [
      { name: "Sword Smash", info: "Physical  HIT: AGI  DMG: STR +1, on hit target losses 1 AGI next turn" },
      { name: "Shield Push", info: "Physical  HIT: AGI  DMG: str  Gains 2 armor at the start of this turn" },
      { name: "Undead Aura", info: "Magical  HIT: INT  DMG: WIS +1 (AoE)" }
    ],
    image: "skeletone"
  },
  {
    name: "Slime",
    type: "enemy",
    description: "Regenerates 2 HP each round",
    strength: 0,
    agility: 0,
    endurance: 3,
    wisdom: 0,
    intuition: 0,
    hp: 11,
    attacks: [
      { name: "Acid Splash", info: "Poison  HIT: AGI  DMG: END +1  Target have -1 shield this battle" },
      { name: "Split", info: "Debuff  HIT: INT  DMG: END -2  loses 1 hp to use, on hit, -1 dodge" },
      { name: "Toxic Spit", info: "From now on, Slime uses both attacks each turn" }
    ],
    image: "slime"
  },
  {
    name: "Lich",
    type: "enemy",
    description: "Ignores half of magic damage.",
    strength: 0,
    agility: 1,
    endurance: 1,
    wisdom: 3,
    intuition: 1,
    hp: 16,
    attacks: [
      { name: "Dark Bolt", info: "Magical  HIT: AGI  DMG: WIS +1" },
      { name: "Soul Drain", info: "Magical  HIT: AGI  DMG: WIS  Lich heals himself for damage dealt if hit" },
      { name: "Curse of Death", info: "Magical  HIT: INT  DMG: 0  Target loses WIS * 2 HP next turn unless cleansed or battle ends" }
    ],
    image: "lich"
  },
  {
    name: "lesser imp",
    type: "enemy",
    description: "always when hit by Player, deal him 1 damage.",
    strength: 1,
    agility: 2,
    endurance: 1,
    wisdom: 0,
    intuition: 1,
    hp: 8,
    attacks: [
      { name: "Claw Jab", info: "Physical  HIT: AGI  DMG: STR" },
      { name: "Impish Bolt", info: "Magical HIT: AGI  DMG: WIS + 1" },
      { name: "Impish course", info: "Debuff  HIT: AGI +1  DMG: 0  Player loses 1 AGI each round" }
    ],
    image: "imp"
  },
  {
    name: "Ghost",
    type: "enemy",
    description: "+1 Dodge vs physical attacks.",
    strength: 0,
    agility: 2,
    endurance: 0,
    wisdom: 2,
    intuition: 2,
    hp: 7,
    attacks: [
      { name: "Wail", info: "Magical  HIT: INT  DMG: WIS +1  Target loses 1 STR this round" },
      { name: "Phase Touch", info: "Magical  HIT: AGI  DMG: WIS  On hit: target loses 1 dodge this turn" },
      { name: "Chill of the Grave", info: "Magical  HIT: INT  DMG: 0  All enemies lose 1 AGI until Ghost is hit" }
    ],
    image: "ghost"
  },
  {
    name: "Fishbeast",
    type: "enemy",
    description: "Gains +1 HIT, always starts fight.",
    strength: 2,
    agility: 2,
    endurance: 1,
    wisdom: 0,
    intuition: 0,
    hp: 11,
    attacks: [
      { name: "Spiked handle", info: "Physical  HIT: AGI  DMG: STR  On hit: target loses 1 HP until end of battle" },
      { name: "Fin Flurry", info: "Physical  HIT: AGI +1  DMG: STR  Attacks twice" },
      { name: "Sea Spray", info: "Debuff  HIT: INT  DMG: 0  Player loses 1 AGI and 1 STR for the battle (activate only once)" }
    ],
    image: "fishbeast"
  },
  {
    name: "Arcydemon",
    type: "enemy",
    description: "Reduces all damage by 2.",
    strength: 5,
    agility: 3,
    endurance: 4,
    wisdom: 2,
    intuition: 2,
    hp: 28,
    attacks: [
      { name: "Hellfire Beam", info: "Magical  HIT: INT  DMG: WIS  Ignores shields and resistances" },
      { name: "Armored wings", info: "Buff Gets END shield, if attacked this turn, countrattack: Physical, HIT: AGI+INT DMG: STR" },
      { name: "Eternal inferno", info: "AOE HIT: INT Deals END damage each turn to Player" }
    ],
    image: "archdemon"
  }

];
