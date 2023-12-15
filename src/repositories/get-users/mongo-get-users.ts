import { IGetUserRepository } from "@/controllers/get-users/protocols"
import { User } from "@/model/user"

export class MongoGetUsersRepository implements IGetUserRepository {
  async getUsers(): Promise<User[]> {
    // aqui que vai rolar a ligação com o banco de dados
    return [
      {
        firstName: "Daniel",
        lastName: "Vargas",
        email: "exemplo@exemplo.com",
        password: "123",
      },
    ]
  }
}
