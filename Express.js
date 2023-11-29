const express = require('express'); 
const app = express();
const petsInfo = require('./data');

app.get ('/api/v1/pets/owner', (req, res) => {
    
    const {owner} = req.query.owner
    res.send({owner});
});

app.get('/api/v1/pets/:name', (req,res) => {
    const {name } = req.params;
    const filter = petsInfo.filter((pet) => pet.name.toLowerCase () === name.toLowerCase());
    res.send(filter);
   
});
app.get('/homepage', (req, res) => {
    res.send('WELCOME');
});
app.get('/api/v1/pets', (req, res)=>{
    res.send(petsInfo)
});





const PORT = 1111
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });