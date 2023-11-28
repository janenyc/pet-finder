// Require Express module
// Initialize Express application
// Define a port number for the server
// Save the pets data in data.js
// Get all pets
    //Create a GET route '/api/pets'
    //Get all list of pets 
// Get Pets by Name
    //Create a GET route '/api/pets/:name'
    //Get the petName parameter from the request
// Get Pets by Owner's Name
    // Create a GET route '/api/pets/:owner'
    //Extract the owner name from the request
//Set the public directory for static files 
//Create a GET route '/'
//Send the main index.html file to start the application


const express = require('express');
const app = express();
const petsData = require('./data'); 

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')}); 


app.get('/api/v1/pets', (req, res) => {
    res.json(petsData); 
});

app.get('/api/v1/pets/name/:name', (req, res) => {
    const petName = req.params.name;
    const foundPets = petsData.filter(pet => pet.name === petName);
    res.json(foundPets)
});

app.get('/api/v1/pets/owner/:ownerName', (req, res) => {
    const ownerName = req.params.ownerName;
    const ownerPets = petsData.filter(pet => pet.owner === ownerName);
    res.json(ownerPets);

});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
