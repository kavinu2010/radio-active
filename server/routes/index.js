const express = require('express');
const {
  getStations, addFavorite, getFavorites, deleteFavorite, getFavoriteStations,
} = require('../controllers');

const router = express.Router();

router.route('/stations/:country').get(getStations);

router.route('/stations/favorites/:user').get(getFavoriteStations);

router.route('/favorites').post(addFavorite).delete(deleteFavorite);

router.route('/favorites/:user').get(getFavorites);

module.exports = router;
