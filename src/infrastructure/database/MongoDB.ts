import mongoose, { ConnectOptions } from 'mongoose';

interface IMongooseClient {
  connect: () => void;
}

export class MongoDB implements IMongooseClient {
  private static instance: MongoDB;
  private static isConnected = false;
  private options = {} as ConnectOptions;
  private uri = process.env.MONGODB_URL as string;

  private constructor() {}

  public static getInstance(): MongoDB {
    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB();
    }
    return MongoDB.instance;
  }

  async connect(): Promise<void> {
    if (MongoDB.isConnected) {
      console.log('Database already connected.');
      return;
    }

    await mongoose.connect(this.uri, this.options).then(
      () => {
        MongoDB.isConnected = true;
        console.log('Successfully connected to the database!');
      },
      (err) => {
        console.log('Error connecting to the database due to:', err);
        process.exit(1);
      },
    );
  }

  public async disconnect(): Promise<void> {
    if (MongoDB.isConnected) {
      await mongoose.disconnect();
      MongoDB.isConnected = false;
      console.log('Disconnected from MongoDB.');
    }
  }
}
