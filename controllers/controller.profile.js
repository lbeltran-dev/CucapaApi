import { Profile } from '../models/profile.js';

export const getProfiles = async (req, res) => {
    try {
        const users = await Profile.findAll();
        res.json(users);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
}

export const getProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Profile.findByPk(id);
        res.json(user);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
}

export const createProfile = async (req, res) => {
    const {name, address, phone, email} = req.body;
    try {
        const newUser = await Profile.create({
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