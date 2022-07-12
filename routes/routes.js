import { Router } from "express";
const router = Router();
import { getProfiles, getProfile, createProfile } from '../controllers/controller.profile.js';
import { getCandidateProfiles, getCandidateProfile, createCandidateProfile } from '../controllers/controller.candidateProfile.js';

//Cucapas
router.get('/api/users', getProfiles);
router.get('/api/users/:id', getProfile);
router.post('/api/users', createProfile);

//Usuarios sin verificar
router.get('/api/possibleUsers', getCandidateProfiles);
router.get('/api/possibleUsers/:id', getCandidateProfile);
router.post('/api/possibleUsers', createCandidateProfile);

export default router;