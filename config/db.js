const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl =     process.env.MONGO_URL

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to mongodb")
    })
    .catch((error) => {
        console.log("Something happened while connecting to mdb",error)
    })


module.exports = mongoose;