import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Reservations = sequelize.define('Reservations', {
    start_date:{
        type: DataTypes.DATE,
        timezone: true,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(255),
        primaryKey: true,
        allowNull: false,
        validate: true,
    },
    endDate:{
        type: DataTypes.DATE,
        timezone: true,
        allowNull: false,
    },
    room_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hotelName:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    paid:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},
{
    tableName: 'reservations',
    timestamps: false,
})

export default Reservations;