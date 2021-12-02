import dotenv from "dotenv"
import express, { Request, Response } from "express"
import cors from "cors"
import helmet from "helmet"
import pinoHttp from "pino-http"
// import { logger } from "./util/logger"
import favoriteRoutes from "./routes/favorite.route"
import { currencyRoutes } from "./routes/currency.route"
import { corsConfig } from "./util/corsConfig.util"
import Logger from "./util/logger"
import morganMiddleware from "./util/morganMiddleware"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors(corsConfig))
app.use(morganMiddleware)
// sanity check
app.get("/api/v1/health", (req: Request, res: Response) => {
  try {
    res.send({ sanityCheck: "sane" }).status(200)
  } catch (error) {
    res.send({ sanityCheck: "insane" }).status(500)
  }
})

// server routing middleware
favoriteRoutes(app)
currencyRoutes(app)

export { app }
