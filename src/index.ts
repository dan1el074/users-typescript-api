import * as express from "express"
import { Response, Request } from "express"
import { config } from "dotenv"

config()

const app = express()

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Listening on port ${port}!`))

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})
