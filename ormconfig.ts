import * as path from "path"
import { ConnectionOptions } from "typeorm"
import * as dotenv from "dotenv"
import { Favorite } from "./src/entities/favorite.entity"
dotenv.config()

const ConnectionOptions = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchornize: true,
  logging: true,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 2000,
  entities: [path.resolve(__dirname, "**/*.entity{.ts,.js}")],
  migrations: [path.resolve(__dirname, "**/*{.ts,.js}")],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migrations",
  },
  extra: { ssl: true },
}

export default ConnectionOptions

// courtesy of Tigran in Tech
