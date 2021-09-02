import express from 'express';
import 'express-async-errors';

import './database';
import { router } from './routes';

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server started at port ${PORT} 💻`));
