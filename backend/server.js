import express from 'express';
import { connectDB } from './config/db.js'; // Adjust path if necessary
import config from './config/config.js'; // Adjust path if necessary
import authRoutes from './Routes/authRoutes.js';
import userPrefRoutes from './Routes/userPrefRoutes.js';
import userHomeRoutes from './Routes/userHomeRoutes.js';

const app = express();

connectDB(); // Initialize Sequelize connection

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/user-preferences', userPrefRoutes);
app.use('/api/user-home', userHomeRoutes);

const PORT = config.server.port || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
