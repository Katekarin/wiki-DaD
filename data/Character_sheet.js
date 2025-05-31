let character = {
  name: "Player",
  hp: 10,
  stats: {
    str: 1,
    end: 1,
    agi: 1,
    wis: 1,
    int: 1
  },
  equipment: {
    weapon: "Miecz Najemnika",
    armor: "Skórznia Wojownika",
    helmet: "",
    boots: "",
    amulet: "",
    rings: "",
    artifact: "Medalion Ziemi"
  },
  inventory: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
};

function createStatRow(label, value, id) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${label}:</strong> <span id="${id}">${value}</span>`;
  return li;
}

function renderCharacterCard(char) {
  const container = document.getElementById("cardDetails");
  container.innerHTML = ""; // wyczyść stare

  const nameHeader = document.createElement("h2");
  nameHeader.className = "char-name";
  nameHeader.textContent = char.name;
  container.appendChild(nameHeader);

  // --- Statystyki ---
  const statsSection = document.createElement("div");
  statsSection.className = "char-section";
  const statsTitle = document.createElement("h3");
  statsTitle.textContent = "Statystyki";
  const statsList = document.createElement("ul");
  statsList.className = "char-stats";

  statsList.appendChild(createStatRow("HP", char.hp, "char-hp"));
  statsList.appendChild(createStatRow("STR", char.stats.str, "char-str"));
  statsList.appendChild(createStatRow("END", char.stats.end, "char-end"));
  statsList.appendChild(createStatRow("AGI", char.stats.agi, "char-agi"));
  statsList.appendChild(createStatRow("INT", char.stats.int, "char-int"));
  statsList.appendChild(createStatRow("WIS", char.stats.wis, "char-wis"));

  statsSection.append(statsTitle, statsList);
  container.appendChild(statsSection);

  // --- Ekwipunek ---
  const eqSection = document.createElement("div");
  eqSection.className = "char-section";
  const eqTitle = document.createElement("h3");
  eqTitle.textContent = "Ekwipunek";
  const eqList = document.createElement("ul");
  eqList.className = "char-equip";

  eqList.appendChild(createStatRow("Hełm", char.equipment.helmet || "—", "char-helmet"));
  eqList.appendChild(createStatRow("Zbroja", char.equipment.armor || "—", "char-armor"));
  eqList.appendChild(createStatRow("Buty", char.equipment.boots || "—", "char-boots"));
  eqList.appendChild(createStatRow("Broń", char.equipment.weapon || "—", "char-weapon"));
  eqList.appendChild(createStatRow("Amulet", char.equipment.amulet || "—", "char-amulet"));
  eqList.appendChild(createStatRow("Pierścienie", char.equipment.rings || "—", "char-rings"));
  eqList.appendChild(createStatRow("Artefakt", char.equipment.artifact || "—", "char-artifact"));

  eqSection.append(eqTitle, eqList);
  container.appendChild(eqSection);
}
