//Récupère l'API
function fetchPokemon(pokemon) {
  return fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon).then(
    (response) => response.json()
  );
}

//Tri les informations récupéré pour créer une div avec l'image et le nom d'un pokémon
async function displayPokemon(pokemon) {
  const data = await fetchPokemon(pokemon);
  document.getElementById("pokemon").innerHTML = `
      <h1>${data.name}</h1>
      <img src="${data.sprites.front_default}"alt="${data.name}" />
      `;
}

//Affiche le pokémon choisi
displayPokemon("ditto");
