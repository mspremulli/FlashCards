const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const path = require('path');
const app = express();
const cors = require('cors');
require('dotenv/config');

const port = process.env.PORT || 5000;

mongoose.connect(
    process.env.DB_CONNECTION,
     { useNewUrlParser: true, useUnifiedTopology: true },
     () => console.log("welcome to DB")
 );

 mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('./api', routes);

 
 app.use((req, res, next) => {
    res.send('Hello World')
  })



 app.listen(port, () => console.log('port is open on',port));
