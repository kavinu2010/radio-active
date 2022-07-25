const express = require('express');
const {
  getStations, addFavorite, getFavorites, deleteFavorite,
} = require('../controllers');

const router = express.Router();

router.route('/stations').get(getStations);

router.route('/favorites').post(addFavorite).delete(deleteFavorite);

router.route('/favorites/:user').get(getFavorites);

module.exports = router;
