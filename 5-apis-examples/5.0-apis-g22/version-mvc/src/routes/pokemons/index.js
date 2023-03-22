const express = require('express');
const { get, getById, create, editComplete, editPartial, deletePokemon } = require('../../controllers/pokemons/index')
const pokemonRouter = express.Router();

pokemonRouter.get('/list', get);

pokemonRouter.get('/list/:id/', getById);

pokemonRouter.post('/create', create);

pokemonRouter.patch('/edit/:id', editPartial);

pokemonRouter.put('/edit/:id', editComplete);

pokemonRouter.delete('/delete/:id', deletePokemon);

module.exports = pokemonRouter;

