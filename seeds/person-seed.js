const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Person = require('../models/person-model');

//Person.sync will create the person table
Person.sync({force: true})
//add the following Person to the database:
.then((data) => Person.bulkCreate([
  {
  	name: 'Luis',
    favoriteCity: 'New York',
    image: 'https://electrone901.github.io/img/profile2.jpg',
    introduction: 'I am a software developer with experience in JavaScript. I completed my undergraduate studies in Computer Information Systems and subsequently volunteer as a professor’s assistant and taught HTML to students at a non-profit organization.',
    distance: '0.2 Mile',
    interest: 'Machine Learning, AI, Data Analisys, Data visualization and Mobile Develovent.',
    skills: 'JavaScript, React, BootStrap, FlexBox, HTML and CSS.',
    availibity:'4 hours per week',
  },

  {
  	name: 'Sean',
    favoriteCity: 'New York',
    image: 'https://electrone901.github.io/img/profile2.jpg',
    introduction: 'I am a software developer with experience in JavaScript. I completed my undergraduate studies in Computer Information Systems and subsequently volunteer as a professor’s assistant and taught HTML to students at a non-profit organization.',
    distance: '0.2 Mile',
    interest: 'Machine Learning, AI, Data Analisys, Data visualization and Mobile Develovent.',
    skills: 'JavaScript, React, BootStrap, FlexBox, HTML and CSS.',
    availibity:'4 hours per week',
  },

  {
  	name: 'Sean',
    favoriteCity: 'New York',
    image: 'https://electrone901.github.io/img/profile2.jpg',
    introduction: 'I am a software developer with experience in JavaScript. I completed my undergraduate studies in Computer Information Systems and subsequently volunteer as a professor’s assistant and taught HTML to students at a non-profit organization.',
    distance: '0.2 Mile',
    interest: 'Machine Learning, AI, Data Analisys, Data visualization and Mobile Develovent.',
    skills: 'JavaScript, React, BootStrap, FlexBox, HTML and CSS.',
    availibity:'4 hours per week',
  },

]))
.catch((err) => console.log(err));


