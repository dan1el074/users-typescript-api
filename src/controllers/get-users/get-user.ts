import { User } from "@/model/user"
import { IGerUserRepository, IGetUsersController } from "./protocols"

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUserRepository: IGerUserRepository) {}

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
        body: "Something went wrong.",
      }
    }
  }
}
