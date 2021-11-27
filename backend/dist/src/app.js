"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IMPORTS
 */
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// import config from "config"
/**
 * CONFIGS & VARS
 */
dotenv.config();
const PORT = parseInt(process.env.PORT, 10) || 4000;
const app = (0, express_1.default)();
/**
 * MIDDLEWARE
 */
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// uncomment line below to accept URL encoded
// app.use(express.urlencoded({ extended: true }))
/**
 *  ROUTING
 */
app
    .route("/")
    .get((req, res) => {
    return res.send("GET request successful");
})
    .post((req, res) => {
    return res.send("POST request successfull");
})
    .put((req, res) => {
    return res.send("PUT request successful");
});
// LISTEN
app.listen(PORT, () => {
    console.log(`Listening to the smooth sounds of server on PORT: ${PORT}`);
});
//# sourceMappingURL=app.js.map