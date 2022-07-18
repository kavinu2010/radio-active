const express = require('express');
const app= express()
const PORT = 5001;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('r u happy now')
})

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
