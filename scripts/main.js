const cardList = document.getElementById("cardList");
const cardDetails = document.getElementById("cardDetails");
const search = document.getElementById("search");

function renderCardList(filter = "", type = "") {
  cardList.innerHTML = "";

  const groupedCards = {};

  // Grupowanie kart wg typu
  cards
    .filter(({ name, type: cardType }) =>
      name.toLowerCase().includes(filter.toLowerCase()) &&
      (type === "" || cardType === type)
    )
    .forEach(card => {
      if (!groupedCards[card.type]) {
        groupedCards[card.type] = [];
      }
      groupedCards[card.type].push(card);
    });

  // Renderowanie grup
  for (const [cardType, cardsOfType] of Object.entries(groupedCards)) {
    const section = document.createElement("div");
    section.className = "card-group";

    const header = document.createElement("div");
    header.className = "card-group-header";
    header.textContent = `${cardType.toUpperCase()} (${cardsOfType.length})`;

    // Tu tworzymy kontener na karty i domyślnie go pokazujemy
    const content = document.createElement("div");
    content.className = "card-group-content";

    // UWAGA: Naprawiamy kliknięcie na nagłówek
    header.addEventListener("click", () => {
      content.classList.toggle("hidden");
    });

    // Sortowanie alfabetyczne wewnątrz grupy
    cardsOfType.sort((a, b) => a.name.localeCompare(b.name));

    cardsOfType.forEach(card => {
      const div = document.createElement("div");
      div.className = "card-name";
      div.innerHTML = `<strong>${card.name}</strong><br><span class="card-type">${card.type}</span>`;
      div.addEventListener("click", () => showCard(card));
      content.appendChild(div);
    });

    section.appendChild(header);
    section.appendChild(content);
    cardList.appendChild(section);
  }
}




function showCard(card) {
  const { type, name, description, reward, attacks, image = "", strength, agility, endurance, wisdom, intuition, hp } = card;

  const imagePath = image ? `images/${type}/${image}.jpg` : "";
  cardDetails.style.backgroundImage = imagePath ? `url('${imagePath}')` : "";
  let html = "";
  switch (type) {
    case "dungeon":
      html = `
        <div class="card-type">${type}</div>
        <h2>${name}</h2>
        <div class="dungeon-description">${description}</div>`;
      break;
    case "item":
      html = `
        <div class="card-type">${type}</div>
          <h2>${name}</h2>
          <div class="item-description">${description}</div>`;
      break;
    case "equipment":
      html = `
        <div class="card-type">${type}</div>
        <h2>${name}</h2>
        <div class="equipment-description">${description}</div>`;
      break;
    case "enemy":
      html = `
      <div class="enemy-hp-right">${hp}</div>
      <div class="card-type">${type}</div>
      <h2>${name}</h2>

      <div class="enemy-stats-bar">
        <div class="stat"><span>STR</span><strong>${strength}</strong></div>
        <div class="stat"><span>DEX</span><strong>${agility}</strong></div>
        <div class="stat"><span>END</span><strong>${endurance}</strong></div>
        <div class="stat"><span>WIS</span><strong>${wisdom}</strong></div>
        <div class="stat"><span>INT</span><strong>${intuition}</strong></div>
      </div>

      <div class="card-row">
        <div class="attacks-block">
          ${attacks.map((atk, i) => `
      <div class="attack attack-${i+1}">
        <div class="attack-name">${atk.name}</div>
        <div class="attack-info">${atk.info}</div>
      </div>
    `).join('')}

        </div>
        <div class="reward-block">
          ${reward}
        </div>
      </div>

      <div class="enemy-description">
        ${description}
      </div>
    `;
     break;
    case "attack":
  html = `
        <div class="card-type">${type}</div>
        <h2>${name}</h2>
        <div class="attack-description">${description}</div>`;
break;
    default:
      html = `
        <div class="card-type">${type}</div>
        <h2>${name}</h2>
        <p class="normal-description">${description}</p>`;
  }

  cardDetails.innerHTML = html;
}

search.addEventListener("input", () => renderCardList(search.value));
renderCardList();
