import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


const Customer = sequelize.define('Customer', {
    email:{
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
        validate:{
            isEmail: true,
        },
    },
    first_name:{
        type: DataTypes.STRING(255),
        allowNull: false,

    },
    last_name:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    credit_card_num:{
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    cvv:{
        type: DataTypes.STRING(3),
        allowNull: true,
    }
},
{
    tableName: 'customer',
    timestamps: false
})

export default Customer;