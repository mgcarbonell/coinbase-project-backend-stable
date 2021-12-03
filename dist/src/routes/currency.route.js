"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyRoutes = void 0;
const currency_controller_1 = require("../controllers/currency.controller");
// We are not writing currencies into memory
// We are not accessing wallets
// K.I.S.S.
const currencyRoutes = (app) => {
    app.get("/api/v1/currency", currency_controller_1.getCurrencyData);
};
exports.currencyRoutes = currencyRoutes;
//# sourceMappingURL=currency.route.js.map