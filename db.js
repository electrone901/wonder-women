const Sequelize = require('sequelize');
//create the database connection. we'll export this out so we can use it in other places in the app


// const sequelizeConnection = new Sequelize('postgres://Luis@localhost:5432/spotify');
const sequelizeConnection = new Sequelize(process.env.DATABASE_URL);


//Test to see if the connection worked
sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err));

//export out the databsae connection to be used elsewhere (for example, creating models and accessing our database in our API)
module.exports = sequelizeConnection;
