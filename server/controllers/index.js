const fetch = require('node-fetch');
const User = require('../models/User');

exports.getStations = async (req, res) => {
  const { country } = req.params; // set up on frontend request
  const uri = `https://de1.api.radio-browser.info/json/stations/bycountry/${country}?hidebroken=true&order=random&limit=10`;
  try {
    const data = await fetch(uri).then(result => result.json());
    const filteredStations = await data.map(station => (
      {
        id: station.stationuuid,
        name: station.name,
        url: station.url_resolved,
        favicon: station.favicon,
        language: station.language,
        genres: station.tags,
        country,
      }));
    return res.status(200).json(filteredStations);
    // reach out to radio browser api
    // send back filtered stations to front end
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

exports.getFavorites = async (req, res) => {
  const email = req.params.user;
  try {
    const user = await User.find({ email });
    return res.status(200).json({ success: true, favorites: user[0].favorites });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

exports.addFavorite = async (req, res) => {
  const { email, station } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const newUser = await User.create({ email, favorites: [station] });
      return res.status(201).json({ success: true, newUser });
    }
    const updatedUser = await User.findOneAndUpdate({ email }, {
      $push: { favorites: station },
    });
    return res.status(201).json({ success: true, updatedUser });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteFavorite = async (req, res) => {
  const { email, station } = req.body;
  try {
    await User.findOneAndUpdate({ email }, {
      $pull: { favorites: station },
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
