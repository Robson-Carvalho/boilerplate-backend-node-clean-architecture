import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/interfaces/UserRepository';
import { UserModel } from '../models/User';

export class MongoUserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return await UserModel.find();
  }
  async findById(id: string): Promise<User | null> {
    return await UserModel.findById(id);
  }
  async create(user: User): Promise<User> {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser as User;
  }
  async update(user: User): Promise<void> {
    await UserModel.findByIdAndUpdate(user.id, user);
  }
  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
