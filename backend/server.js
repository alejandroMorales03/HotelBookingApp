import express from 'express';
import { connectDB } from './config/db.js'; // Adjust path if necessary
import config from './config/config.js'; // Adjust path if necessary
import authRoutes from './Routes/authRoutes.js';

const app = express();

connectDB(); // Initialize Sequelize connection

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = config.server.port || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
