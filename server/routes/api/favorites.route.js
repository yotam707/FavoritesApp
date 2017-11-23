// .//routes/api/favorites.route.js


var express = require('express');

var router = express.Router();

//favorites controller

var FavoritesController = require('../../controllers/favorites.controller');

//mapping api calls to controllers

router.get('/', FavoritesController.getFavorites);

router.post('/', FavoritesController.createFavorite);

router.put('/', FavoritesController.updateFavorite);

router.delete('/:id', FavoritesController.removeFavorite);

module.exports = router;


