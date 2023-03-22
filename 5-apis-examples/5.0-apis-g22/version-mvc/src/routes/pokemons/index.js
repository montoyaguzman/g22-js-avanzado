const express = require('express');
const pokemonRouter = express.Router();
const { create, query, queryById, editPartial, editComplete, delete } = require('../../services/pokemons/index');

pokemonRouter.get('/list', query);

pokemonRouter.get('/list/:id/', queryById);

pokemonRouter.post('/create', create);

pokemonRouter.patch('/edit/:id', editPartial);

pokemonRouter.put('/edit/:id', editComplete);

pokemonRouter.delete('/delete/:id', delete);

module.exports = pokemonRouter;

