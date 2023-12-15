import { MongoGetUsersRepository } from "./mongo-get-users"

describe("MongoGetUsersRepository", () => {
  let mongoGetUsersRepository: MongoGetUsersRepository

  beforeEach(() => {
    mongoGetUsersRepository = new MongoGetUsersRepository()
  })

  it("should return a list of users", async () => {
    const users = await mongoGetUsersRepository.getUsers()

    expect(users).toEqual([
      {
        firstName: "Daniel",
        lastName: "Vargas",
        email: "exemplo@exemplo.com",
        password: "123",
      },
    ])
  })
})
