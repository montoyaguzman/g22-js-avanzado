const express = require('express');
const app = express();
const port = 3000; // process.ENV.PORT || 3000;

const pokemons = [
    { name: 'bulbasaur', type: 'grass' },
    { name: 'squirtle', type: 'water' },
    { name: 'charmander', type: 'fire' },
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/list-pokemon', (req, res) => {
    res.status(200).json(pokemons);
});

app.get('/list-pokemon/:id', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});