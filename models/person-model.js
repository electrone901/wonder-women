const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//create person model
var Person = sequelizeConnection.define('person', {
  name: {
    type: Sequelize.STRING,
    // validate: {is: /^[a-zA-Z 0-9]{1,100}$/} // validate input
  },
	favoriteCity: {
  	type: Sequelize.STRING, 
  	// validate: {is: /^[a-z A-Z 0-9]{1,250}$/} 
  }
});

module.exports = Person;



