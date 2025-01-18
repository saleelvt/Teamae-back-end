const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect('mongodb+srv://teamaedb:teamaedbrepo1212@cluster0.n0txi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Successfully connected to mongodb")
    })
    .catch((error) => {
        console.log("Something happened while connecting to mdb",error)
    })


module.exports = mongoose;