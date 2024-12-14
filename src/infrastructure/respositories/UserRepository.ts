import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/interfaces/UserRepository";

export class UserRepository implements IUserRepository {
  findAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  create(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
