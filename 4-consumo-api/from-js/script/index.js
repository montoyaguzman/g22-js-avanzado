function main() {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    fetch(`${url}/?limit=151`)
      .then(response => response.json())
      .then(allPokemon => console.log(allPokemon.results))
}

main();