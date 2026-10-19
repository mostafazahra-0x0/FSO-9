import express from 'express';
import cors from 'cors';
import patientRouter from './routes/patients.ts';
import diagnosisRouter from './routes/diagnoses.ts';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use('/api/patients', patientRouter);
app.use('/api/diagnoses', diagnosisRouter);

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});