import { z } from 'zod';
import { Weather, Visibility, type NewDiaryEntry } from './types.ts';

export const parseNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('comment' in object && 'date' in object && 'weather' in object && 'visibility' in object)  {
    const newEntry: NewDiaryEntry = {
      weather: z.enum(Weather).parse(object.weather),
      visibility: z.enum(Visibility).parse(object.visibility),
      date: z.iso.date().parse(object.date),
      comment: z.string().parse(object.comment) 
    };
    return newEntry;
  }

  throw new Error('Incorrect data: some fields are missing');
};