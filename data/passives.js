const passives = [
  {
    name: "Szybkie ruchy",
    type: "passive",
    description: "Za każdym razem, kiedy postać otrzymuje obrażenia, gracz rzuca K6, by sprawdzić, czy przeciwnik nie otrzyma obrażeń z odwetu (normalny atak). Przy pierwszym otrzymaniu obrażeń szansa wynosi 1/6 i rośnie o 1 z każdym kolejnym otrzymaniem obrażeń przez gracza. Jeśli obrażenia odwetowe zostaną zadane, szansa resetuje się do 1/6.",
    image: "fast_moves"
  },
  {
    name: "Ogłuszające ciosy",
    type: "passive",
    description: "Kiedy trafisz pierwszą kartą w combo, druga karta dostaje pasywnie +1 do trafienia.",
    image: "stuning_strikes"
  },
  {
    name: "Silne barki",
    type: "passive",
    description: "Rozmiar twojego ekwipunku jest rozpatrywany jakbyś miał 3 siły więcej",
    image: "strong_barges"
  },
  {
    name: "Adaptacja",
    type: "passive",
    description: "when you take physical damage, next physical damage you take is reduced by 1",
    image: "adaptation"
  },
  {
    name: "Wytrzymały",
    type: "passive",
    description: "Your health points are incresed by your endurance (10 + End * 3 at total)",
    image: "adaptation"
  },
  {
    name: "Trzeci oddech",
    type: "passive",
    description: "When you regain hp due to not attacking, you regain 1 health more",
    image: "adaptation"
  },
  {
    name: "Desperacja",
    type: "passive",
    description: "Kiedy twoje hp jest poniżej bądź równe twój end * 1,5 to twoje podstawowe ataki zadają 1 punk obrażeń więcej",
    image: "Desperation"
  },
  {
    name: "Pasywna pozycja",
    type: "passive",
    description: "W pierwszej turze każdej walki, otrzymujesz END tarczy",
    image: "Pasove_position"
  },
  {
    name: "Szczęście głupca",
    type: "passive",
    description: "Raz na walkę, możesz przerzucić dowolną kość swoją lub przeciwnika",
    image: "Luck of fool"
  },
  {
    name: "Doświadczony wojownik",
    type: "passive",
    description: "rozpoczynając walkę, dostajesz na samym poczatku darmową turę na zagranie 1 karty defensywnej z ręki",
    image: "Desperation"
  },
  {
    name: "Tancerz ostrzy:agresja",
    type: "passive",
    description: "kiedy twoje combo wynosi twój limit kart zagrania, na koniec tury, otrzymuje on obrażenia równe połowie zagranym kartom.",
    image: "dancer of blades:agresion"
  },
  {
    name: "Tancerz ostrzy:obrona",
    type: "passive",
    description: "kiedy twoje combo wynosi twój limit kart zagrania, otrzymujesz tarczę na jedną rundę równą liczbie zagranych kart.",
    image: "dancer of blades:defensive"
  },
  {
    name: "Poszukiwacz przygód",
    type: "passive",
    description: "od teraz w każdej turze dobierasz 2 karty zdarzeń. na początku, i na końcu swojej tury",
    image: "Adventurer"
  },
  {
    name: "Badacz podziemi",
    type: "passive",
    description: "kiedy dobierasz karte lochu, dobierz 2, wybierz kartę którą wolisz, drugą odrzuć. odrzucone karty podziemi, kiedy skończy się talia przetasuj i uzupełnij nimi brakującą talię",
    image: "Dungeon explorer"
  }
];
