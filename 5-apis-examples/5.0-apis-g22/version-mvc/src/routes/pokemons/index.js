const express = require('express');
const PokemonService = require('../../services/pokemons/index');
const pokemonService = new PokemonService();
const pokemonRouter = express.Router();

pokemonRouter.get('/list', pokemonService.queryAll);

pokemonRouter.get('/list/:id/', pokemonService.queryById);

pokemonRouter.post('/create', pokemonService.createPokemon);

pokemonRouter.patch('/edit/:id', pokemonService.editPartial);

pokemonRouter.put('/edit/:id', pokemonService.editComplete);

pokemonRouter.delete('/delete/:id', pokemonService.deletePokemon);

module.exports = pokemonRouter;

