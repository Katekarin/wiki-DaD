function toggleCharacterCard() {
  document.getElementById('character-card').classList.toggle('active');
}

// dane testowe
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
    items: "Medalion Ziemi"
  },
  inventory: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
};

// Dodajemy do data/Character_sheet.js

function renderCharacterCard(character) {
  const statOptions = Array.from({ length: 10 }, (_, i) => `<option value="${i}">${i}</option>`).join('');
  
  const itemOptions = items.map(item => `<option value="${item.name}">${item.name}</option>`).join('');
  function getEquipmentOptionsForSlot(slot, selectedName = '') {
  return equipment
    .filter(eq => eq.slot === slot)
    .map(eq => `<option value="${eq.name}" ${eq.name === selectedName ? 'selected' : ''}>${eq.name}</option>`)
    .join('');
}


  const html = `
    <div class="character-card">
      <div class="char-column stats">
        <h2>${character.name}</h2>
        <p><strong>HP:</strong> ${character.hp}</p>
        <ul class="char-stats">
          ${Object.entries(character.stats).map(
            ([key, val]) => `
              <li>
                <label><strong>${key.toUpperCase()}:</strong></label>
                <select name="stat-${key}">
                  ${statOptions.replace(`value="${val}"`, `value="${val}" selected`)}
                </select>
              </li>
            `
          ).join('')}
        </ul>
      </div>

      <div class="char-column eq">
        <h3>Ekwipunek</h3>
        <ul class="char-eq">
          <li><strong>Broń 1:</strong>
            <select name="weapon1">
              ${getEquipmentOptionsForSlot('weapon', character.equipment.weapon)}
            </select>
          </li>
          <li><strong>Broń 2:</strong>
            <select name="weapon2">
              ${getEquipmentOptionsForSlot('weapon', character.equipment.weapon)}
            </select>
          </li>
          <li><strong>Zbroja:</strong>
            <select name="armor">
              ${getEquipmentOptionsForSlot('armor', character.equipment.weapon)}
            </select>
          </li>
          <li><strong>Hełm:</strong>
            <select name="helmet">
              ${getEquipmentOptionsForSlot('helmet', character.equipment.weapon)}
            </select>
          </li>
          <li><strong>Buty:</strong>
            <select name="boots">
              ${getEquipmentOptionsForSlot('boots', character.equipment.weapon)}
            </select>
          </li>
          <li><strong>Amulet:</strong>
            <select name="amulet">
              ${getEquipmentOptionsForSlot('amulet', character.equipment.weapon)}
            </select>
          </li>
          <li><strong>Pierścienie:</strong>
            <select name="rings">
              ${getEquipmentOptionsForSlot('ring', character.equipment.weapon)}
            </select>
          </li>
          <li><strong>Przedmiot1:</strong>
            <select name="items">
              ${itemOptions.replace(`value="${character.equipment.items}"`, `value="${character.equipment.items}" selected`)}
            </select>
          </li>
                    <li><strong>Przedmiot2:</strong>
            <select name="items">
              ${itemOptions.replace(`value="${character.equipment.items}"`, `value="${character.equipment.items}" selected`)}
            </select>
          </li>
                    <li><strong>Przedmiot3:</strong>
            <select name="items">
              ${itemOptions.replace(`value="${character.equipment.items}"`, `value="${character.equipment.items}" selected`)}
            </select>
          </li>
        </ul>
      </div>
    </div>

    <style>

      .character-active {
        width: 600px;
        margin-left: auto;
        margin-right: auto;
        height: 375px;
      }

      .character-card {
        display: flex;
        padding: 1rem;
        gap: 1.5rem;
        background: rgba(0, 0, 0, 0.6);
        border: 2px solid #888;
        border-radius: 12px;
        color: #fff;
        font-family: 'Segoe UI', sans-serif;
        width: 100%;
        height: 100%;
      }

      .character-active {
        margin-left: 100px;
      }

      .char-column {
        display: flex;
        flex-direction: column;
      }

      .char-column.eq {
        flex: 3;
      }

      .char-column.stats {
        flex: 1;
      }

      .char-stats li,
      .char-eq li {
        list-style: none;
        margin: 0.3rem 0;
      }

      select {
        margin-left: 0.5rem;
        padding: 0.2rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        background: #333;
        color: #fff;
      }
    </style>
  `;

  cardDetails.classList.add("character-active");
  cardDetails.innerHTML = html;
}


function showCard(card) {
  cardDetails.classList.remove("character-active");
  
}


function loadCharacterData() {
  document.getElementById('char-name').textContent = character.name;
  document.getElementById('char-hp').textContent = character.hp;

  // staty
  const stats = character.stats;
  const statsHtml = Object.entries(stats).map(
    ([key, val]) => `<p><strong>${key.toUpperCase()}:</strong> ${val}</p>`
  ).join('');
  document.getElementById('char-stats').innerHTML = statsHtml;

  // ekwipunek
  const eq = character.equipment;
  const equipmentHtml = Object.entries(eq).map(
    ([key, val]) => `<li><strong>${key}:</strong> ${val || '-'}</li>`
  ).join('');
  document.getElementById('char-equipment').innerHTML = equipmentHtml;

  // plecak
  const inv = character.inventory;
  const invHtml = inv.flat().map(slot => `<div>${slot || '-'}</div>`).join('');
  document.getElementById('char-inventory').innerHTML = invHtml;
}

window.onload = loadCharacterData;
