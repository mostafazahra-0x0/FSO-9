import patients from '../../data/patients.ts';
import type { NonSensitivePatient } from '../types.ts';

const getNonSensiveEntries = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getNonSensiveEntries
};