const routerPokemon = require('../routes/pokemons/index');
// const routerTrainers = require('../routes/traners/index');
// cities
// gyms

const routerApi = (app) => {
    app.use('/pokemon', routerPokemon);
    // app.use('/trainers', routerTrainers);
}