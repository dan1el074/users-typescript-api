import { User } from "@/model/user"
import { IGetUserRepository, IGetUsersController } from "./protocols"

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async handle() {
    try {
      const users: User[] = await this.getUserRepository.getUsers()

      return {
        statusCode: 200,
        body: users,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: `Something went wrong: ${error}`,
      }
    }
  }
}
