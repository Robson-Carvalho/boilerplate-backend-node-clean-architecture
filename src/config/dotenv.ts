import dotenv from 'dotenv';
import path from 'path';

const envPath =
  process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, '../../.env.prod')
    : path.resolve(__dirname, '../../.env.dev');

dotenv.config({ path: envPath });

if (!process.env.PORT) {
  console.warn(
    'Warning: PORT is not defined in the environment variables. Using default port 3030.',
  );
}

if (!process.env.MONGODB_URL) {
  console.warn(
    'Warning: MONGODB_URL is not defined in the environment variables. MongoDB connection may fail.',
  );
}

if (!process.env.JWT_SECRET) {
  console.warn(
    'Warning: JWT_SECRET is not defined in the environment variables. Token authentication may fail.',
  );
}
