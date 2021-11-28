// imports
import dotenv from "dotenv"
import "reflect-metadata"
import { createConnection } from "typeorm"
import ORMconfig from "./ormconfig"
import { handle } from "./util/error"
import { logger } from "./util/logger"
import { createHttpTerminator } from "http-terminator"
import { app } from "./app"

// configs & variables
dotenv.config({ path: __dirname + "/.env" })

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000

const server = app.listen(PORT, () => {
  logger.info(`You are listening to the sweet sounds of port: ${PORT}`)
})

// httpTerminator
process.on("unhandledRejection", (err) => {
  throw err
})

process.on("uncaughtException", (err) => {
  handle(err)
})
const httpTerminator = createHttpTerminator({ server })
const shutdownSigs = ["SIGTERM", "SIGINT"]

shutdownSigs.forEach((signal) =>
  process.on(signal, async () => {
    logger.info(`${signal} received, exiting gracefully...`)
    await httpTerminator.terminate()
  })
)

// TypeORM
const main = async () => {
  try {
    await createConnection(ORMconfig)
    logger.info("Connected to Postgres")
  } catch (error) {
    handle(error)
  }
}

main()

// htppTerminator configuration

// port listen
