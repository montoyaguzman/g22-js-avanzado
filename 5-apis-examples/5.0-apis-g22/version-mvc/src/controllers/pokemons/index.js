const PokemonService = require('../../services/pokemons/index');
const pokemonService = new PokemonService();

const get = (req, res) => {
    const pokemons = pokemonService.queryAll();
    res.status(200).json(pokemons);
}

const getById = (req, res) => {

}

const create = (req, res) => {
  const newPokemon = req.body;
  pokemonService.createPokemon(newPokemon);
  res.status(201).send();
}

const editPartial = (req, res) => {

}

const editComplete = (req, res) => {

}

const deletePokemon = (req, res) => {

}

module.exports = {
    get,
    getById,
    create,
    editPartial,
    editComplete,
    deletePokemon,
}