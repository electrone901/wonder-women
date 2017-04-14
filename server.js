const express = require('express');
const app = express();
const path = require('path');
//extracting only the data that it needs
const bodyParser = require('body-parser');
//Sequelize allow to to talk to db 
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

//servers static files
app.use(express.static(path.join(__dirname, '/front/bundle')));

//ROUTES//
const router = require('./routes');
const personRoute = router.personRoute;

//CALL FILE, CREATE DB
require('./seeds/person-seed.js')

//arses the text as URL encoded data 
app.use(bodyParser.urlencoded({ extended: true }));

//HEROKU PORT
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log('Listening on port', PORT));


//ROUTER URL PATHS//
app.use('/api/people', personRoute);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/index.html'));
});