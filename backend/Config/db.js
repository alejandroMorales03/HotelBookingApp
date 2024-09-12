import { Sequelize } from 'sequelize';
import config from './config.js';

// Create a new Sequelize instance with the configuration settings
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'postgres',
    port: config.db.port,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false // Adjust according to your SSL certificate
        }
    },
    logging: false // Set to true if you want to log SQL queries for debugging
});

// Function to connect to the database
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Function to close the database connection
const closeDB = async () => {
    try {
        await sequelize.close();
        console.log('Connection to the database closed.');
    } catch (error) {
        console.error('Error closing the database connection:', error);
    }
};

// Handle termination signals to gracefully close the database connection
process.on('SIGINT', async () => {
    await closeDB();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await closeDB();
    process.exit(0);
});

export { sequelize , connectDB, closeDB };
