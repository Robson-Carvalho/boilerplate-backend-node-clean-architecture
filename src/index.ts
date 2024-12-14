require('./config/dotenv');
import express from 'express';
import cors from 'cors';
import { userRoutes } from './interface/routes/userRoutes';
import { errorHandler } from './interface/middleware/errorHandler';
import { logger } from './infrastructure/logger';
import { setupSwagger } from './interface/swagger';
import { MongoDB } from './infrastructure/database/MongoDB';

async function start() {
  const mongoDB = MongoDB.getInstance();

  await mongoDB.connect();

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/api', userRoutes);
  app.use(errorHandler);
  setupSwagger(app);

  const PORT = process.env.PORT || 3030;

  app.listen(PORT, () => {
    console.info(`Server is running on port http://localhost:${PORT}`);
  });
}

start();
