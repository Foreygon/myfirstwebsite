"use strict";

const ejs = require('ejs');
const path = require('path');

const express = require('express');
const app = express();



// import
const guessPort = require('./utils/port')
// const port = guessPort();
const port = 3000;

// console.log( port );


// app settings
// --


// app setup
// --

// def du moteur de rendu
// on precise à Express que le moeur de rendu se fera avec le moeur d'EJS
// le module "ejs", transmet à Express ses param avec le propiété "__express"
app.engine('.html', ejs.__express);

// homepage

// def du rep de stokage du fichier de vues
// path.join() va resoudre auto le chemin abs du rep "views"
app.set('views', path.join(__dirname,"views"))

app.set('view engine', 'html');


// contact


// routing
// --
app.use(require('./controllers/homepage'));
app.use(require('./controllers/about'));
app.use(require('./controllers/contact'));


// start server app
// --

app.listen(port , () => {
    console.log("App listening on port", port);
})