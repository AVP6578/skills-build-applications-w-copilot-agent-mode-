import express from 'express';
import cors from 'cors';
import database from './config/database.js';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Octofit Tracker API is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

export default app;
