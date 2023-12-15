import * as express from "express"
import { Response, Request } from "express"
import { config } from "dotenv"
import { GetUsersController } from "./controllers/get-users/get-user"
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users"

config()

const app = express()

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Listening on port ${port}!`))

app.get("/users", async (req: Request, res: Response) => {
  const getUsersController = new GetUsersController(
    new MongoGetUsersRepository(),
  )
  const { body, statusCode } = await getUsersController.handle()
  res.send(body).status(statusCode)
})
