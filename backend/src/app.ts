/**
 * IMPORTS
 */
import * as dotenv from "dotenv"
import express, { application, Request, Response } from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
// import config from "config"

/**
 * CONFIGS & VARS
 */
dotenv.config()

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
// app.use(express.urlencoded({ extended: true }))

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
