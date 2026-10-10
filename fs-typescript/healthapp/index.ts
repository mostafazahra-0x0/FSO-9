
import express from 'express';
import { calculateBmi } from './bmiCalculator.ts';
import { calculateExercises } from './exerciseCalculator.ts';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!req.query.height || !req.query.weight || !Number.isFinite(height) || !Number.isFinite(weight)) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const bmi = calculateBmi(height, weight);
  return res.json({ weight, height, bmi });
});

app.post('/exercises', (req, res) => {
  const body: unknown = req.body;

  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const { daily_exercises, target } = body as Record<string, unknown>;

  if (daily_exercises === undefined || target === undefined) {
    return res.status(400).json({ error: 'parameters missing' });
  }

  const isNumeric = (value: unknown): boolean => {
    if (typeof value === 'number') {
      return Number.isFinite(value) && value >= 0;
    }

    if (typeof value === 'string' && value.trim() !== '') {
      const number = Number(value);
      return Number.isFinite(number) && number >= 0;
    }

    return false;
  };

  if (
    !Array.isArray(daily_exercises) ||
    !isNumeric(target) ||
    !daily_exercises.every(isNumeric)
  ) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const result = calculateExercises(
    daily_exercises.map(Number),
    Number(target)
  );

  return res.json(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
