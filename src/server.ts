import express from 'express';

import './database';

const PORT = 3333;

const app = express();

app.listen(PORT, () => console.log(`Server started at port ${PORT} 💻`));
