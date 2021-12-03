"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const favorite_route_1 = __importDefault(require("./routes/favorite.route"));
const currency_route_1 = require("./routes/currency.route");
const morganMiddleware_util_1 = __importDefault(require("./util/morganMiddleware.util"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(morganMiddleware_util_1.default);
// sanity check
app.get("/api/v1/health", (req, res) => {
    try {
        res.send({ sanityCheck: "sane" }).status(200);
    }
    catch (error) {
        res.send({ sanityCheck: "insane" }).status(500);
    }
});
// server routing middleware
(0, favorite_route_1.default)(app);
(0, currency_route_1.currencyRoutes)(app);
//# sourceMappingURL=app.js.map