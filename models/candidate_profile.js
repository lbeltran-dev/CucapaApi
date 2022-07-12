import Sequelize from 'sequelize';
import  { sequelize } from '../database/database.js';

export const CandidateProfile = sequelize.define('candidate_profile', {
    id_candidate_profile: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

