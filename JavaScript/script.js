
document.querySelector("#search").addEventListener("click", getPokemon);






function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}




function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {

        


      document.querySelector(".pokemonBox").innerHTML = `
      <div class="photo">
        <img class="poke" src="${data.sprites.other["official-artwork"].front_default}" width="100px" height="100px" alt="Pokemon name">
      </div>

      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h1>
        <p>Number: ${data.order} </p>
        <p>Weight: ${data.weight}</p>
        <p> ${(data.stats[0].stat.name)}: ${data.stats[0].base_stat}</p>
        <p> ${data.stats[1].stat.name}: ${data.stats[1].base_stat}</p>
        <p> ${data.stats[2].stat.name}: ${data.stats[2].base_stat}</p>
        <p> ${data.stats[3].stat.name}: ${data.stats[3].base_stat}</p>
        <p> ${data.stats[4].stat.name}: ${data.stats[4].base_stat}</p>
        

      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}