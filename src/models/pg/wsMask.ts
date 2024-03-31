import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../config/sequelize';

interface MaskAttributes {
    id: number;
    name: string;
    type: string;
    rating: number;
}

interface MaskCreationAttributes extends Optional<MaskAttributes, 'id'> {}

class Mask
    extends Model<MaskAttributes, MaskCreationAttributes>
    implements MaskAttributes
{
    public id!: number;
    public name!: string;
    public type!: string;
    public rating!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Mask.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'masks',
        sequelize,
        timestamps: true,
    },
);

// Synchronisez les modèles avec la base de données
sequelize
    .sync({ alter: true }) // Utilisez `alter: true` avec prudence; idéal pour le développement
    .then(() => console.log('Models were synchronized successfully.'))
    .catch((error) => console.error('Failed to synchronize models:', error));

export default Mask;
