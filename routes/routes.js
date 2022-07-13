import { Router } from "express";
const router = Router();
import { getProfiles, getProfile, createProfile } from '../controllers/controller.profile.js';
import { getCandidateProfiles, getCandidateProfile, createCandidateProfile } from '../controllers/controller.candidateProfile.js';

//Cucapas
router.get('/api/profiles', getProfiles);
router.get('/api/profiles/:id', getProfile);
router.post('/api/profiles', createProfile);

//Usuarios sin verificar
router.get('/api/candidateProfiles', getCandidateProfiles);
router.get('/api/candidateProfiles/:id', getCandidateProfile);
router.post('/api/candidateProfiles', createCandidateProfile);

export default router;