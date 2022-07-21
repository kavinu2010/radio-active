const express = require('express');
const { addFavorite, getFavorites } = require('../controllers');

const router = express.Router();

router.route('/favorites').post(addFavorite);

router.route('/favorites/:user').get(getFavorites);

module.exports = router;
