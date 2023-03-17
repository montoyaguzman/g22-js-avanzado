const express = require('express');
const app = express();
const port = 3000; // process.ENV.PORT || 3000;

app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

let pokemons = [
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

app.post('/create-pokemon', (req, res) => {
    const newPokemon = req.body;
    console.log('newPokemon: ', newPokemon);
    pokemons.push(newPokemon);
    console.log('pokemons', pokemons);
    res.status(201).send();
});

app.put('/edit-pokemon/:id', (req, res) => {
    const id = req.params.id;
    const newPokemon = req.body;
    console.log('newPokemon: ', newPokemon);
    const index = pokemons.findIndex(pokemon => pokemon.id === parseInt(id));
    pokemons[index] = newPokemon;
    console.log('pokemons', pokemons);
    res.status(200).send();
});

