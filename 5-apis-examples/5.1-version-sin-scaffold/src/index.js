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

// hello world
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// getAll
app.get('/list-pokemon', (req, res) => {
    res.status(200).json(pokemons);
});

// getById
app.get('/list-pokemon/:id/', (req, res) => {
    const id = req.params.id;
    console.log('req.params: ', id);
    console.log('req.params: ', typeof id);
    // aqui iria la consulta la bd con el id
    const foundedPokemon = pokemons.filter(pokemon => pokemon.id === parseInt(id) )[0];
    console.log('foundedPokemon: ', foundedPokemon);
    res.status(200).json(foundedPokemon);
});

// create
app.post('/create-pokemon', (req, res) => {
    const newPokemon = req.body;
    console.log('newPokemon: ', newPokemon);
    pokemons.push(newPokemon);
    console.log('pokemons', pokemons);
    res.status(201).send();
});

// editComplete
app.put('/edit-pokemon/:id', (req, res) => {
    const id = req.params.id;
    const newPokemon = req.body;
    console.log('newPokemon: ', newPokemon);
    const index = pokemons.findIndex(pokemon => pokemon.id === parseInt(id));
    pokemons[index] = newPokemon;
    console.log('pokemons', pokemons);
    res.status(200).send();
});

// editPartial
app.patch('/edit-pokemon/:id', (req, res) => {
    /**
     * Reto
     * Crear un endpoint que modifique solo el name y el type 
     * del pokemon
     *  */ 
});

// delete
app.delete('/edit-pokemon/:id', (req, res) => {
     /**
     * Reto
     * Crear un endpoint elimine un pokemon del arreglo
     * de acuerdo al id recibido como parametro de la request
     *  */
});


