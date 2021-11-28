import { ConnectionOptions } from "typeorm"
import path from "path"

const isCompiled = path.extname(__filename).includes("js")

export default {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_USERNAME || "postgres",
  password: process.env.TYPEORM_PASSWORD || "postgres",
  database: process.env.TYPEORM_DATABASE,
  synchornize: true,
  logging: false,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 2000,
  // entities: [`src/entity/**/*.${isCompiled ? "js" : "ts"}`],
  // migrations: [`src/entity/**/*.${isCompiled ? "js" : "ts"}`],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
  },
} as ConnectionOptions

// courtesy of Tigran in Tech
