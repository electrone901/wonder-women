const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Project = require('../models/projects-model');

//Person.sync will create the person table
Project.sync({force: true})
//add the following Person to the database:
.then((data) => Project.bulkCreate([
  {
	  projectName: 'Amazing Animal Art Gallery',
	  techStack: 'JavaScript, HTML5 & CSS3, ReactJS, NodeJS, Bootstrap, React modal, React pop-up, ExpressJS, RESTful API, and Node.js.',
	  image: 'http://hackathon.io.s3.amazonaws.com/profiles/images/000/088/343/thumb/ari-screenshot.png',
	  gitHubLink: 'https://github.com/electrone901/Amazing-Animal-Art-Gallery',
	  achivementsGoals1: 'New York',
	  achivementsGoals2: 'New York',
	  achivementsGoals3: 'New York',
	  achivementsGoals4: 'New York',
	  achivementsGoals5: 'New York',
	  achivementsGoals6: 'New York',  
},

{
	  projectName: 'Amazing Animal Art Gallery',
	  techStack: 'JavaScript, HTML5 & CSS3, ReactJS, NodeJS, Bootstrap, React modal, React pop-up, ExpressJS, RESTful API, and Node.js.',
	  image: 'http://hackathon.io.s3.amazonaws.com/profiles/images/000/088/343/thumb/ari-screenshot.png',
	  gitHubLink: 'https://github.com/electrone901/Amazing-Animal-Art-Gallery',
	  achivementsGoals1: 'New York',
	  achivementsGoals2: 'New York',
	  achivementsGoals3: 'New York',
	  achivementsGoals4: 'New York',
	  achivementsGoals5: 'New York',
	  achivementsGoals6: 'New York',  
},
{
	  projectName: 'Amazing Animal Art Gallery',
	  techStack: 'JavaScript, HTML5 & CSS3, ReactJS, NodeJS, Bootstrap, React modal, React pop-up, ExpressJS, RESTful API, and Node.js.',
	  image: 'http://hackathon.io.s3.amazonaws.com/profiles/images/000/088/343/thumb/ari-screenshot.png',
	  gitHubLink: 'https://github.com/electrone901/Amazing-Animal-Art-Gallery',
	  achivementsGoals1: 'New York',
	  achivementsGoals2: 'New York',
	  achivementsGoals3: 'New York',
	  achivementsGoals4: 'New York',
	  achivementsGoals5: 'New York',
	  achivementsGoals6: 'New York',  
}
]))
.catch((err) => console.log(err));


