import dotenv from 'dotenv'

const config = {
    db : {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.PORT,
        ssl: {
            rejectUnauthorized: false 
        }
    },
    server:{
        port: process.env.SERVER_PORT,
    }

}

export default config;