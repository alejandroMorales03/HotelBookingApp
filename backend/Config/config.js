import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const config = {
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    },
    server: {
        port: process.env.PORT || 8000
    },
    notifier:{
        user: process.env.NOTIFICATION_EMAIL,
        password: process.env.NOTIF_EMAIL_PASS,
    }
};

export default config;
