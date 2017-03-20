const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

app.use(express.static(path.join(__dirname, '/front/bundle')));

//ROUTES//
const router = require('./routes');
const personRoute = router.personRoute;




app.use(bodyParser.urlencoded({ extended: true }));

//listen on port 8888
app.listen('9999', () => console.log('Listening on port 9999'));



//ROUTER URL PATHS//
app.use('/api/people', personRoute);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/index.html'));
});