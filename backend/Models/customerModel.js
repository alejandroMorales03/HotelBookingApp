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
    }
},
{
    tableName: 'customer',
    timestamps: false
})

export default Customer;