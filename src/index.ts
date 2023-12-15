import * as express from "express"
import { Response, Request } from "express"
import { config } from "dotenv"
import { GetUsersController } from "./controllers/get-users/get-user"
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users"
import { MongoClient } from "./database/mongo"

const main = async () => {
  config()

  const app = express()

  await MongoClient.connect()

  app.get("/users", async (req: Request, res: Response) => {
    const mongoGetUserRepository = new MongoGetUsersRepository()
    const getUsersController = new GetUsersController(mongoGetUserRepository)
    const { body, statusCode } = await getUsersController.handle()
    res.send(body).status(statusCode)
  })

  const port = process.env.PORT || 8000

  app.listen(port, () => console.log(`Listening on port ${port}!`))
}

main()
