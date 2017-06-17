const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//create person model
var Project = sequelizeConnection.define('project', {
  projectName: {
    type: Sequelize.STRING,
  },
	techStack: {
  	type: Sequelize.STRING, 
  },

  images: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  teamMembers: {
    type: Sequelize.STRING,
  },
  gitHubLink: {
    type: Sequelize.STRING,
  },
  achivementsGoals1: {
    type: Sequelize.STRING,
  },

  achivementsGoals2: {
    type: Sequelize.STRING,
  },
  achivementsGoals3: {
    type: Sequelize.STRING,
  },
  achivementsGoals4: {
    type: Sequelize.STRING,
  },
  achivementsGoals5: {
    type: Sequelize.STRING,
  },
  achivementsGoals6: {
    type: Sequelize.STRING,
  },
});

module.exports = Project;



