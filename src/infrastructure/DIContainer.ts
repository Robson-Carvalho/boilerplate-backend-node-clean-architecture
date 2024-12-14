import { CreateUser } from '../use-cases/user/CreateUser';
import { DeleteUser } from '../use-cases/user/DeleteUser';
import { GetAllUsers } from '../use-cases/user/GetAllUsers';
import { GetUserByID } from '../use-cases/user/GetUserByID';
import { UpdateUser } from '../use-cases/user/UpdateUser';
import { MongoUserRepository } from './respositories/MongoUserRepository';

class DIContainer {
  private static _userRepository = new MongoUserRepository();

  static getUserRepository() {
    return this._userRepository;
  }

  static getGetAllUsersUseCase() {
    return new GetAllUsers(this.getUserRepository());
  }

  static getCreaetUserUseCase() {
    return new CreateUser(this.getUserRepository());
  }

  static getDeleteUserUseCase() {
    return new DeleteUser(this.getUserRepository());
  }

  static getUpdateUserUseCase() {
    return new UpdateUser(this.getUserRepository());
  }

  static getGetUserByIDUseCase() {
    return new GetUserByID(this.getUserRepository());
  }
}

export { DIContainer };
