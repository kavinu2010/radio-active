const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('mongo DB connected');
};

module.exports = dbConnection;
