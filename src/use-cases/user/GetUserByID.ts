import { IUserRepository } from "../../domain/interfaces/UserRepository";

export class GetUserByID {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    return await this.userRepository.findById(id);
  }
}
