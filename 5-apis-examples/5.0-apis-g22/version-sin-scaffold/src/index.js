const express = require('express');
const app = express();
const port = 3000; // process.ENV.PORT || 3000;

const pokemons = [
    { id: 1, name: 'bulbasaur', type: 'grass' },
    { id: 2, name: 'squirtle', type: 'water' },
    { id: 3, name: 'charmander', type: 'fire' },
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/list-pokemon', (req, res) => {
    res.status(200).json(pokemons);
});

app.get('/list-pokemon/:id/', (req, res) => {
    const id = req.params.id;
    console.log('req.params: ', id);
    console.log('req.params: ', typeof id);
    // aqui iria la consulta la bd con el id
    const foundedPokemon = pokemons.filter(pokemon => pokemon.id === parseInt(id) )[0];
    console.log('foundedPokemon: ', foundedPokemon);
    res.status(200).json(foundedPokemon);

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});