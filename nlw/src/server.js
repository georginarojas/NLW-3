// Import dependences
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// Init the express
const server = express();

// Use the body req
server.use(express.urlencoded({extended: true}))

// Using static files
server.use(express.static('public'));

// Configure engine template
// ** change file .html to .hbs
server.set('views', path.join(__dirname, "views"));
server.set('view engine', 'hbs');

// Create a route new 
server
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/new-orphanage', pages.newOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//Create a route
// server.get('/', (request, response) =>{
//     return response.sendFile(path.join(__dirname, 'views', 'index.html'))
// })

// Connect to server
server.listen(5500);