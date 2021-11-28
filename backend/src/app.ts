import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import pinoHttp from "pino-http"
import { logger } from "./util/logger"

const app = express()

/**
 * MIDDLEWARE
 */
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(pinoHttp({ logger }))
/**
 * API Health Check
 */

app.get("/api/v1/running", (req, res) =>
  res.send({ message: "Up and running!" })
)

export { app }
