const character = {
  name: "Aelan",
  class: "Wojownik",
  description: "Były najemnik, który przetrwał trzy wojny i pięć lochów – zawsze z tym samym mieczem.",
  stats: {
    hp: 12,
    str: 4,
    dex: 3,
    end: 2,
    int: 1,
    wis: 0
  },
  backpackSize: { x: 4, y: 4 },
  passives: [
    {
      name: "Nieustępliwość",
      description: "Po pierwszym trafieniu w walce, otrzymuje 1 punkt pancerza (raz na walkę)."
    },
    {
      name: "Ostatni Cios",
      description: "Jeśli HP spadnie do 1, zadaje +1 obrażenie do końca walki."
    }
  ],
  deck: [
    "Mocne uderzenie – +2 DMG, -1 HIT w tej turze",
    "Parowanie – Ignoruj do 2 obrażeń z ataku wręcz",
    "Przebicie – Zadaj DMG ignorując pancerz",
    "Szarża – Zaatakuj jako pierwszy w turze",
    "Rozpaczliwy cios – Jeśli HP < 3: +3 DMG"
  ],
  equipment: {
    weapon: "Miecz Najemnika (+1 STR, +1 DMG przy trafieniu krytycznym)",
    armor: "Skórznia wojownika (1 ARM, nie zmniejsza DEX)",
    artifact: "Medalion Ziemi (+1 END)"
  },
  notes: {
    style: "Przód linii, agresywne wejście, wymusza reakcję.",
    weakness: "Magia, niska INT i WIS – podatny na iluzje, klątwy, uroki.",
    synergy: "Dobrze działa z postaciami wspierającymi i debufferami."
  }
};
