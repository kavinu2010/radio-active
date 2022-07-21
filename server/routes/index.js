const express = require('express');
const { addFavorite, getFavorites, deleteFavorite } = require('../controllers');

const router = express.Router();

router.route('/favorites').post(addFavorite).delete(deleteFavorite);

router.route('/favorites/:user').get(getFavorites);

module.exports = router;
