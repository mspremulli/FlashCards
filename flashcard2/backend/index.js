const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv/config');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.DB_CONNECTION,
   { useNewUrlParser: true, useUnifiedTopology: true },
   () => console.log("welcome to DB")
);



const cardDataRouter = require('./routes/card');
const userRouter = require('./routes/users');

app.use('./cards', cardDataRouter);
app.use('./users', userRouter);


 app.listen(port, () => console.log('port is open on',port));
