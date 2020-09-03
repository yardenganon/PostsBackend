const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');
app.use('/posts/', postRoute);


app.get('/', (req,res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{
    useUnifiedTopology: true,
    useNewUrlParser: true
 },
() => console.log('Connected to DB')
);

//Listening
app.listen(3000);
