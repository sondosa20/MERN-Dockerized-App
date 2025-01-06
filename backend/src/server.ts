import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/users';
import { specs, swaggerUi } from './config/swagger';
import { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

connectDB();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/swagger-json', (_: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(specs);
});

app.use('/api/users', userRoutes);

app.get('/', (_, res) => {
  res.send('Backend is working!');
});\

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});