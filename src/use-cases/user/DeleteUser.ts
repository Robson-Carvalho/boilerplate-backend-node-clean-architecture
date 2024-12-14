import { IUserRepository } from "../../domain/interfaces/UserRepository";

export class DeleteUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    return await this.userRepository.delete(id);
  }
}
