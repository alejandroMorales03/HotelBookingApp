import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Room = sequelize.define('Room', {
    room_num: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    has_bathtub: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    num_beds: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    has_tv: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    guest_capacity: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    has_minibar: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    has_wifi: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    booked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    room_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    hotel_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    room_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    has_balcony: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
}, {
        tableName: 'rooms',
        timestamps: false
    })

export default Room;