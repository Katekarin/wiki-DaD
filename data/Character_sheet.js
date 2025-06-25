// === UTILITY FUNCTIONS ===

function toggleCharacterCard() {
  document.getElementById('character-card')?.classList.toggle('active');
}

function cloneCard(card) {
  return { ...card };
}

function generateCardElement(card) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.innerHTML = `
    <h4>${card.name}</h4>
    <p><strong>Typ:</strong> ${card.type}</p>
    <p><strong>Obrażenia:</strong> ${card.damage || "?"} (${card.dmgtype || "?"})</p>
    <p class="desc">${card.description || "Brak opisu"}</p>
  `;

  cardDiv.addEventListener("click", () => {
    if (character.deck.includes(card)) {
      const index = character.deck.indexOf(card);
      if (index !== -1) {
        character.deck.splice(index, 1);
      }
  } else {
    const copiedCard = cloneCard(card);
    character.deck.push(copiedCard);
  }
  renderPlayerDeck();
});

  return cardDiv;
}

function renderPlayerDeck() {
  const deckDiv = document.getElementById("player-deck-cards");
  if (!deckDiv) return;

  deckDiv.innerHTML = "";
  character.deck.forEach(card => {
    const cardElement = generateCardElement(card);
    cardElement.classList.add("in-deck");
    deckDiv.appendChild(cardElement);
  });
}

function getEquipmentOptionsForSlot(slot, selectedName = "") {
  return equipment
    .filter(eq => eq.slot === slot)
    .map(eq => `<option value="${eq.name}" ${eq.name === selectedName ? "selected" : ""}>${eq.name}</option>`)
    .join('');
}

const character = {
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
    items: ["Medalion Ziemi", "", ""]
  },
  inventory: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ],
  deck: []
};

// === RENDER CHARACTER CARD ===

function renderCharacterCard(character) {
  const statOptions = Array.from({ length: 10 }, (_, i) => `<option value="${i}">${i}</option>`).join('');
  const itemOptions = items.map(item => `<option value="${item.name}">${item.name}</option>`).join('');

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
        <button id="deck-button"  onclick='openDeckBuilder()' title="Edytuj talię">🃏 Talia</button>
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

    <!-- Tło i okienko modala -->
    <div id="deck-backdrop" style="display: none;" class="backdrop"></div>
    <div id="deck-builder" style="display: none;" class="modal-window">
      <div class="deck-builder-content">
        <div id="playerDeckModal" class="deck-column">
          <h3>Twoja talia</h3>
          <!-- tutaj dodamy karty gracza -->
        </div>
        <div id="cardsList" class="deck-column">
          <h3>Lista kart</h3>
          <!-- tutaj lista wszystkich dostępnych kart -->
        </div>
      </div>
      <button id="close-deck" class="close-deck-button">Zamknij</button>
    </div>


    <style>

.card {
  background-color: #444;
  border: 2px solid #666;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  font-size: 0.9em;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  transition: transform 0.2s ease;
}
.card:hover {
  transform: scale(1.02);
  border-color: #999;
}
.card h4 {
  margin: 0 0 5px;
  font-size: 1.1em;
  color: #ffcc66;
}
.card .desc {
  font-style: italic;
  font-size: 0.85em;
  color: #ccc;
}


#deck-builder {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #222;
  color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  z-index: 1001;
  display: none;
  min-width: 800px; /* większe */
  min-height: 500px;
  max-height: 80vh;
  overflow: auto;
}

.deck-builder-content {
  display: flex;
  gap: 20px;
}

.deck-column {
  flex: 1;
  background-color: #333;
  padding: 15px;
  border-radius: 8px;
  overflow-y: auto;
  max-height: 90%;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
}

.deck-column h3 {
  margin-top: 0;
  text-align: center;
  border-bottom: 1px solid #555;
  padding-bottom: 5px;
}

.close-deck-button {
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  background-color: #cc4444;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-deck-button:hover {
  background-color: #ff5555;
}

.close-deck-button {
  margin-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  background-color: #cc4444;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-deck-button:hover {
  background-color: #ff5555;
}


.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 600px;
  background-color: white;
  border-radius: 10px;
  z-index: 1000;
  padding: 20px;
}



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

  const cardDetails = document.getElementById("cardDetails");
  if (!cardDetails) return;

  cardDetails.classList.add("character-active");
  cardDetails.innerHTML = html;

  const deckButton = document.getElementById("deck-button");
  if (deckButton) {
    deckButton.addEventListener("click", () => {
      console.log("Talia kliknięta");
      document.getElementById("deck-backdrop").style.display = "block";
      document.getElementById("deck-builder").style.display = "block";
    });
  } else {
    console.warn("Nie znaleziono przycisku talii.");
  }

  const closeDeckButton = document.getElementById("close-deck");
  if (closeDeckButton) {
    closeDeckButton.addEventListener("click", () => {
      console.log("Zamykam okno talii");
      document.getElementById("deck-builder").style.display = "none";
      document.getElementById("deck-backdrop").style.display = "none";
    });
  }
}



// === DECK BUILDER ===

function openDeckBuilder() {
  console.log(">>> openDeckBuilder was called");
  const deckBuilder = document.getElementById("deck-builder");
  if (!deckBuilder) return;

  deckBuilder.innerHTML = `
    <div class="deck-builder-content">
      <div id="playerDeckModal" class="deck-column">
        <h3>Twoja talia</h3>
        <div id="player-deck-cards"></div>
      </div>
      <div id="cardsList" class="deck-column">
        <h3>Lista kart</h3>
        <div id="available-cards"></div>
      </div>
    </div>
    <button id="close-deck" class="close-deck-button">Zamknij</button>
  `;

  renderPlayerDeck();

  // Render all available cards
  const availableCardsContainer = document.getElementById("available-cards");
  attacks.forEach(card => {
    availableCardsContainer.appendChild(generateCardElement(card));
    console.log('hi')
  });

  document.getElementById("deck-backdrop").style.display = "block";
  deckBuilder.style.display = "block";

  document.getElementById("close-deck")?.addEventListener("click", () => {
    document.getElementById("deck-backdrop").style.display = "none";
    deckBuilder.style.display = "none";
  });
}

// === LOAD CHARACTER DATA ===

function loadCharacterData() {
  document.getElementById('char-name').textContent = character.name;
  document.getElementById('char-hp').textContent = character.hp;

  const statsHtml = Object.entries(character.stats)
    .map(([key, val]) => `<p><strong>${key.toUpperCase()}:</strong> ${val}</p>`)
    .join('');
  document.getElementById('char-stats').innerHTML = statsHtml;

  const equipmentHtml = Object.entries(character.equipment)
    .map(([key, val]) => `<li><strong>${key}:</strong> ${val || '-'}</li>`)
    .join('');
  document.getElementById('char-equipment').innerHTML = equipmentHtml;

  const invHtml = character.inventory.flat()
    .map(slot => `<div>${slot || '-'}</div>`)
    .join('');
  document.getElementById('char-inventory').innerHTML = invHtml;
}

function showCard(card) {
  document.getElementById("cardDetails")?.classList.remove("character-active");
}



window.onload = loadCharacterData;

