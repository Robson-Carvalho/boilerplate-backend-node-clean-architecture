import mongoose, { Schema, Document } from 'mongoose';

import { IUser } from '../../domain/interfaces/User';

interface IUserMongoDB extends IUser, Document {}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdDate: { type: Date, required: true },
});

const UserModel = mongoose.model<IUserMongoDB>('users', UserSchema);

export { UserModel, IUserMongoDB };
