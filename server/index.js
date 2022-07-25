const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

dbConnection();

app.use(require('./routes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/static`));
  app.get('*', (req, res) => {
    res.type('html').sendFile(`${__dirname}/static/index.html`);
  });
}

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
