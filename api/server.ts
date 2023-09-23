import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router } from './routes';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

// These help with a nodemon issue where it reboots my server in development but
// the previous process hasn't been killed yet resulting in a port in use error
process.once('SIGUSR2', function () {
  process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', function () {
  // this is only called on ctrl+c, not restart
  process.kill(process.pid, 'SIGINT');
});

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'We are online!' });
});

app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
