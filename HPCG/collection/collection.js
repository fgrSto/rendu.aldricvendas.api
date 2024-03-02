//Récupère l'API
function fetchCards() {
  return fetch(`https://hp-api.lainocs.fr/characters`).then((response) =>
    response.json()
  );
}

//Tri les informations récupéré pour créer une div avec l'image et le nom de chaque personnage
async function displayCards() {
  const cards = await fetchCards();
  const cardContainer = document.getElementById("all_cards");

  cards.forEach((data) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <h1>${data.name}</h1>
      <img src="${data.image}" alt="${data.name}" />
    `;
    cardContainer.appendChild(cardElement);
  });
}

//Affiche les cartes
displayCards();
