"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
const favorite_entity_1 = require("./src/entity/favorite.entity");
dotenv_1.default.config();
module.exports = {
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10),
    username: process.env.TYPEORM_USERNAME || "postgres",
    password: process.env.TYPEORM_PASSWORD || "postgres",
    database: process.env.TYPEORM_DATABASE,
    synchornize: true,
    logging: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 2000,
    entities: [favorite_entity_1.Favorite],
    migrations: [`src/migrations/*.ts`],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migrations",
    },
};
// courtesy of Tigran in Tech
//# sourceMappingURL=ormconfig.js.map