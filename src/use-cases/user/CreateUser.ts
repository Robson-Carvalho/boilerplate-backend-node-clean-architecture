import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/interfaces/UserRepository";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User) {
    return await this.userRepository.create(user);
  }
}
