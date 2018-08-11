const express = require('express');
const hbs = require('hbs');
// const axios = require('axios');
const port = process.env.PORT || 3000;
const app = express();

//Archivos autoejecutables
require('./hbs/helper');


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jhon Alex'
    });
})

app.get('/web', (req, res) => {
    let info = {
        nombre: 'jhOn aLEX',
        edad: 23,
        url: req.url
    }
    console.log(info);
    res.render('web');
})

app.listen(port, () => {
    console.log(`Corriendo en ${port}`);
})
