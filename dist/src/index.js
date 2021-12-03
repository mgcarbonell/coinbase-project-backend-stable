"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("../ormconfig"));
const logger_util_1 = __importDefault(require("./util/logger.util"));
require("express-async-errors");
dotenv_1.default.config();
const PORT = parseInt(process.env.PORT, 10) || 4000;
const server = app_1.app.listen(PORT, () => {
    logger_util_1.default.info(`You are now listening to the smooth sounds of port: ${PORT}`);
});
// TypeORM DB connection
const connectToORM = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let connection;
        connection = yield (0, typeorm_1.createConnection)(ormconfig_1.default);
        logger_util_1.default.info("Connected to Postgres");
        yield connection.synchronize();
        yield connection.runMigrations();
    }
    catch (error) {
        logger_util_1.default.error(error);
    }
});
connectToORM();
//# sourceMappingURL=index.js.map