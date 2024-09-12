import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const SignupAttempt = sequelize.define('SignupAttempt', {
    email: {
        type: DataTypes.STRING(255), 
        allowNull: false,
        primaryKey: true, 
        validate: {
            isEmail: true 
        }
    },
    first_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    expires_at: {
        type: DataTypes.DATE, 
        allowNull: false
    },
    auth_code: {
        type: DataTypes.STRING(255), 
        allowNull: false
    }
}, {
    tableName: 'signup_attempt',
    timestamps: false 
});

export default SignupAttempt;
