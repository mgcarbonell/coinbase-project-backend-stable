// imports
import dotenv from "dotenv"
import { app } from "./app"
import "reflect-metadata"
import { Connection, createConnection } from "typeorm"
import { config } from "../ormconfig"
import Logger from "./util/logger.util"
import "express-async-errors"

dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000

const server = app.listen(PORT, () => {
  Logger.info(`You are now listening to the smooth sounds of port: ${PORT}`)
})
// TypeORM DB connection
const connectToORM = async () => {
  try {
    let connection: Connection
    connection = await createConnection(config)
    Logger.info("Connected to Postgres")
    await connection.synchronize()
    await connection.runMigrations()
  } catch (error) {
    Logger.error(error)
  }
}

connectToORM()
