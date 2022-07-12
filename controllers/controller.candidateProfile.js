import { CandidateProfile } from '../models/candidate_profile.js';

export const getCandidateProfiles = async (req, res) => {
    try {
        const users = await CandidateProfile.findAll();
        res.json(users);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
}

export const getCandidateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await CandidateProfile.findByPk(id);
        res.json(user);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
}

export const createCandidateProfile = async (req, res) => {
    const {name, address, phone, email} = req.body;
    try {
        const newUser = await CandidateProfile.create({
            name,
            address,
            phone,
            email
        })
        res.json(newUser);
    } catch(error) {
        res.status(500).json({message: error.message});
    };
}