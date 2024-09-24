import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Hotel = sequelize.define('Hotel',{
    hotel_ID:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
    },
    has_pool:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    has_gym:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    has_room_service:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    pet_friendly:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    ocean_view:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    hotel_name:{
        type : DataTypes.STRING(50),
        allowNull: false,
    },
    city:{
        type: DataTypes.STRING(50),
        allowNull: false,
    }

},{
    tableName: 'hotels',
    timestamps: false 
})

export default Hotel;