// imports
import dotenv from "dotenv"
import "reflect-metadata"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import pinoHttp from "pino-http"
import { Connection, createConnection } from "typeorm"
import ORMconfig from "../ormconfig"
import { handle, middlewareError, middlewareNotFound } from "./util/error"
import { logger } from "./util/logger"
import { createHttpTerminator } from "http-terminator"
import "express-async-errors"

dotenv.config()

const app = express()
const PORT: number = parseInt(process.env.PORT as string, 10) || 4000

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(pinoHttp({ logger }))
app.use(helmet())
app.use(cors())
app.use([middlewareNotFound, middlewareError])

// create server
//
const server = app.listen(PORT, () => {
  logger.info(`You are listening to the sweet sounds of port: ${PORT}`)
})

// error handling
process.on("unhandledRejection", (err) => {
  throw err
})

process.on("uncaughtException", (err) => {
  handle(err)
})

// error termination
const httpTerminator = createHttpTerminator({ server })
const shutdownSigs = ["SIGTERM", "SIGINT"]

shutdownSigs.forEach((signal) =>
  process.on(signal, async () => {
    logger.info(`${signal} received, exiting gracefully...`)
    await httpTerminator.terminate()
  })
)

// TypeORM DB connection
const connectToORM = async () => {
  try {
    let connection: Connection
    connection = await createConnection(ORMconfig)
    logger.info("Connected to Postgres")
    // await connection.synchronize()
    // await connection.runMigrations()
  } catch (error) {
    handle(error)
  }
}

connectToORM()

// Sanity check
app.get("/api/v1/health", (req, res) => res.send({ "sanity check": "sane" }))
