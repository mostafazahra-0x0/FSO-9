import express from 'express';
import diaryService from '../services/diaryService.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  const data = diaryService.getEntries();
  res.send(data);
});

router.post('/', (_req, res) => {
  res.send("add a new diary");
});

export default router;