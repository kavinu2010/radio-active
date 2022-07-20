const express = require('express');
const dbConnection = require('./config/db');
const app= express()
const PORT = 5001;

app.use(express.json());
dbConnection();
app.use('/', require('./routes'));

app.get('/', (req, res) => {
    res.send('r u happy now?')
})

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
