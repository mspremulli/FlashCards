// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// const mongoose = require('mongoose');
const express = require('express');
const app = express();
// require('dotenv/config');

const port = process.env.PORT || 4000;

app.use((req, res, next) => {
  res.send('Hello World')
})

// mongoose.connect(
//     process.env.DB_CONNECTION,
//      { useNewUrlParser: true, useUnifiedTopology: true },
//      () => console.log("welcome to DB")
//  );



 app.listen(port, () => console.log('port is open'));
