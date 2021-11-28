/**
 * IMPORTS
 */
import * as dotenv from "dotenv"
import express, { Request, Response } from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { createConnection } from "typeorm"
import ORMconfig from "./ormconfig"

/**
 * CONFIGS & VARS
 */
dotenv.config({ path: __dirname + "/.env" })

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000
const app = express()

/**
 * MIDDLEWARE
 */
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
// uncomment line below to accept URL encoded
app.use(express.urlencoded({ extended: false }))

const main = async () => {
  try {
    await createConnection(ORMconfig)
    console.log("Connected to Postgres")
  } catch (error) {
    console.log(error)
  }
}

main()
/**
 *  ROUTING
 */

app
  .route("/")
  .get((req: Request, res: Response) => {
    return res.send("GET request successful")
  })
  .post((req: Request, res: Response) => {
    return res.send("POST request successfull")
  })
  .put((req: Request, res: Response) => {
    return res.send("PUT request successful")
  })

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening to the smooth sounds of server on PORT: ${PORT}`)
})
