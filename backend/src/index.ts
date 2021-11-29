// imports
import dotenv from "dotenv"
import { app } from "./app"
import "reflect-metadata"
import { Connection, createConnection } from "typeorm"
import ORMconfig from "../ormconfig"
import { handle, middlewareError, middlewareNotFound } from "./util/error"
import { logger } from "./util/logger"
import { createHttpTerminator } from "http-terminator"
import "express-async-errors"

dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000

//server middleware

// error handling middleware
app.use([middlewareNotFound, middlewareError])

// create server
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
    await connection.synchronize()
    await connection.runMigrations()
  } catch (error) {
    handle(error)
  }
}

connectToORM()
