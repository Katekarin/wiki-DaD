const attacks = [
  {
    name: "horizontal Slash",
    type: "attack",
    from:"right",
    to:"left",
    hit: "dex",
    damage:"str",
    dmgtype:"physical",
    description: "Deals physical damage to a target.",
    combo_special:"+1 hit",
    image: "sword_slash"
  },
  {
    name: "horizontal Slash",
    type: "attack",
    from:"left",
    to:"right",
    hit: "dex",
    damage:"str",
    dmgtype:"physical",
    description: "Deals physical damage to a target.",
    combo_special:"+1 hit",
    image: "sword_slash"
  },
  {
    name: "Vertical Slash",
    type: "attack",
    from:"up",
    to:"down",
    hit: "dex",
    damage:"str",
    dmgtype:"physical",
    description: "Deals physical damage to a target.",
    combo_special:"+1 damage",
    image: "sword_slash"
  },
  {
    name: "magic bolt",
    type: "attack",
    from:"left",
    to:"right",
    hit: "dex",
    damage:"wis",
    description: "Deals  magical damage to a target.",
    image: "magic_bolt"
  },
  {
    name: "bow shot",
    type: "attack",
    from:"bottom",
    to:"up",
    hit: "dex",
    damage:"str",
    description: "Deals physical damage to a target.",
    image: "bow_shot"
  },
   {
    name: "Ice Spike",
    type: "attack",
    from: "left",
    to: "right",
    hit: "dex",
    damage: "wis",
    description: "Shoots an icy spike at the target.",
    image: "ice_spike"
  },
];
