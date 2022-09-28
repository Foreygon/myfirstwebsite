"use strict";

//appel des module
const express = require('express');
const router = express.Router();

// page def
// --

// def du chemin de la page
const path = "/contact";

// def du controller de la page
const controller = (request, response) => {
    


    // response.render('nom de la vue', obj de donnée)
    response.render('contact', {

    });
} ;

// ajout de la def de la page au registr de routage de Express
router.get(path, controller);

// module export
// --
module.exports = router;