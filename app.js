const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/form.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
});

app.listen(PORT, () => console.log("servidor corriendo en el puerto ${port}"));