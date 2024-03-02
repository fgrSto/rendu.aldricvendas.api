//Récupère l'API
function fetchStarWars3() {
  return fetch(
    "https://api.themoviedb.org/3/movie/1895?api_key=2a9b4a09f1ddbf9185d9c08837b434ba"
  ).then((response) => response.json());
}

//Tri les informations récupéré pour créer une div avec l'image et le nom du film Star Wars III
async function displayStarWars3() {
  const data = await fetchStarWars3();
  document.getElementById("star-wars-3").innerHTML = `
      <h1>${data.title}</h1>
      <img src="https://image.tmdb.org/t/p/w500${data.poster_path}"alt="${data.title}" />=
      `;
}

displayStarWars3();
