import { ConnectionOptions } from "typeorm"
import dotenv from "dotenv"
import { Favorite } from "./src/entity/favorite.entity"

dotenv.config()

export = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: 5432,
  username: process.env.TYPEORM_USERNAME || "postgres",
  password: process.env.TYPEORM_PASSWORD || "postgres",
  database: process.env.TYPEORM_DATABASE,
  synchornize: true,
  logging: true,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 2000,
  entities: [__dirname + "/dist/src/entity/*.js"],
  migrations: ["src/migrations/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migrations",
  },
} as ConnectionOptions

// courtesy of Tigran in Tech
