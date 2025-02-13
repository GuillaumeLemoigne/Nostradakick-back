import {sequelize} from '../src/sequelize.js';

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection OK.');
  } catch (error) {
    console.error('Unable to connect to the database:',error.message);
  }
}

testConnection();