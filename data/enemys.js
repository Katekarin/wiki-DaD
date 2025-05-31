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
    reward: "gold x10",
    attacks: [
      { name: "Rotting Grasp", info: "Physical  HIT: AGI  DMG: STR" },
      { name: "Swing", info: "Physical  HIT: AGI  DMG: STR " },
      { name: "Spoilage Burst", info: "Poison  HIT: DEX  DMG: END +1 (AoE)  All targets hit LOSES 1 AGI this fight" }
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
    reward: "gold x8",
    attacks: [
      { name: "Sword Smash", info: "Physical  HIT: AGI  DMG: STR +1" },
      { name: "Shield Push", info: "Physical  HIT: AGI  DMG: str  Gains 2 armor next turn" },
      { name: "Undead Aura", info: "Magical  HIT: INT  DMG: WIS +1 (AoE)" }
    ],
    image: "skeletone"
  },
  {
    name: "Slime",
    type: "enemy",
    description: "Regenerates 1 HP each round",
    strength: 0,
    agility: 0,
    endurance: 3,
    wisdom: 0,
    intuition: 0,
    hp: 11,
    reward: "gold x12",
    attacks: [
      { name: "Acid Splash", info: "Poison  HIT: AGI  DMG: END +1  Target loses 1 armor" },
      { name: "Split", info: "Debuff  HIT: INT  DMG: 0  Heals 2 HP, target loses 1 AGI" },
      { name: "Toxic Spit", info: "Poison  HIT: INT  DMG: +1  Poison: 1 dmg/turn for 3 turns" }
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
    reward: "gold x3, Phylactery Gem",
    attacks: [
      { name: "Dark Bolt", info: "Magical  HIT: AGI  DMG: WIS +1" },
      { name: "Soul Drain", info: "Magical  HIT: AGI  DMG: WIS  Lich heals himself for 2 HP if hit" },
      { name: "Curse of Death", info: "Magical  HIT: INT  DMG: 0  Target loses 50% HP in 3 turns unless cleansed" }
    ],
    image: "lich"
  }
];
