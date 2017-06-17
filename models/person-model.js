const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//create person model
var Person = sequelizeConnection.define('person', {
  name: {
    type: Sequelize.STRING,
  },
	favoriteCity: {
  	type: Sequelize.STRING, 
  },

  image: {
    type: Sequelize.STRING,
  },
  distance: {
    type: Sequelize.STRING,
  },
  interest: {
    type: Sequelize.STRING,
  },
  skills: {
    type: Sequelize.STRING,
  },
  introduction: {
    type: Sequelize.STRING,
  },
  availibity: {
    type: Sequelize.STRING,
  }
}


);

module.exports = Person;



