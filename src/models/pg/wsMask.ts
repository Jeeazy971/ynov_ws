import { Model, DataTypes, Optional } from 'sequelize';
import {sequelize} from '../../config/sequelize'; // Adjust import based on your setup

interface MaskAttributes {
    id: number;
    name: string;
    type: string;
    rating: number;
}

// Use 'Optional' for creation attributes to specify which attributes are optional in the 'create' method
interface MaskCreationAttributes extends Optional<MaskAttributes, 'id'> {}

class Mask
    extends Model<MaskAttributes, MaskCreationAttributes>
    implements MaskAttributes
{
    public id!: number;
    public name!: string;
    public type!: string;
    public rating!: number;

    // Readonly properties for the timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the model's schema using 'init'
Mask.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(128), // Specify string length here if needed
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(128), // Specify string length here if needed
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'masks', // Specify the table name for the model
        sequelize, // Pass the sequelize instance
        timestamps: true, // Enable Sequelize to add createdAt and updatedAt timestamps
    },
);

export default Mask;
