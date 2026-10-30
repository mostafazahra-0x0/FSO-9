import express, { type Response } from 'express';
import patientService from '../services/patientService.ts';
import type { NonSensitivePatient } from '../types.ts';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatient[]>) => {
  res.send(patientService.getNonSensiveEntries());
});

router.post('/', (req, res) => {
  const {
    name,
    ssn,
    dateOfBirth,
    gender,
    occupation,
  } = req.body;
  const addedEntry = patientService.addPatient({
    name,
    ssn,
    dateOfBirth,
    gender,
    occupation,
  });
  res.json(addedEntry);
});

export default router;