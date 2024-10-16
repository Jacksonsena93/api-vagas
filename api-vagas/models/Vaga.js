import sequelize from '../database.js';
import { DataTypes } from 'sequelize';

const Vaga = sequelize.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    cargo: {
        type: DataTypes.STRING,
    },
    cidade: {
        type: DataTypes.STRING,
    },
    salario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'vagas',
});

export { Vaga };