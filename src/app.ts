import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './utils/db.js';

import router from './routes/goals.route.js';

const app = express();
dotenv.config();

app.use(express.json());

app.use('/v1/goals', router);
app.use('/v1/goals', router);
app.use('/v1/goals/:id', router);
app.use('/v1/goals/:id', router);
app.use('/v1/goals/:id', router);

(async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    app.listen(process.env.PORT, () => {
      console.log(`APP is listening at http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
