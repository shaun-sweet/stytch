import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
dotenv.config();
import cors from 'cors';
import helmet from 'helmet';

if (!process.env.PORT) {
  process.exit(1);
}
const a = 0;
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'We are online!' });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
