import pkg from 'pg'
import config from './config.js'

const dbConfig = {
    user: config.db.user,
    password: config.db.password,
    host: config.db.host,
    port: config.db.port,
    database: config.db.database,
    ssl: config.db.ssl,

};

const {Pool} = pkg;

const pool = new Pool(dbConfig);

const connectDB = async() =>{
    console.log('Database pool intialized')
}

const closeDB = async () => {
    try {
        await pool.end();
        console.log('Database connection pool closed');
    } catch (err) {
        console.error('Error closing the database connection pool', err);
    }
};

process.on('SIGINT', async () => {
    await closeDB();
    process.exit(0);
});
  
process.on('SIGTERM', async () => {
    await closeDB();
    process.exit(0);
});

export {pool as db, connectDB, closeDB};