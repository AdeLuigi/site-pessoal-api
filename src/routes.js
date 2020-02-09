const { Router } = require('express');
const ArtigoController = require('./controllers/ArtigoController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

routes.post('/postar', ArtigoController.store);
routes.get('/', ArtigoController.index);
routes.get('/page/:_id', SearchController.index);
module.exports = routes;