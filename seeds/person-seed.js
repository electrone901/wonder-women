const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Person = require('../models/person-model');

//Person.sync will create the person table
Person.sync({force: true})
//add the following Person to the database:
.then((data) => Person.bulkCreate([
  {name: 'Sean',
  favoriteCity: 'New York'}
]))
.catch((err) => console.log(err));


