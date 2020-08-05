const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv/config');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
   { useNewUrlParser: true, useUnifiedTopology: true },
   () => console.log("welcome to DB")
);


//import routes
const cardDataRouter = require('./routes/card');
const userRouter = require('./routes/users');

//use routes
app.use('/cards', cardDataRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('We are on home');
});


//open port
 app.listen(port, () => console.log('port is open on', port));
