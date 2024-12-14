import { IUserRepository } from '../../domain/interfaces/UserRepository';

export class GetAllUsers {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    return await this.userRepository.findAll();
  }
}
