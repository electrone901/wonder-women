const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//create person model
var Person = sequelizeConnection.define('person', {
  name: {
    type: Sequelize.STRING,
  },
	favoriteCity: {
  	type: Sequelize.STRING, 
  }
});

module.exports = Person;



