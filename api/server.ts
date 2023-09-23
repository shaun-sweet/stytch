import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes.ts';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'We are online!' });
});

app.use('/api/v1', routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
