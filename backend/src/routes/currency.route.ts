import { Express } from "express"
import { getCurrencyData } from "../controllers/currency.controller"

// We are not writing currencies into memory
// We are not accessing wallets
// K.I.S.S.
const currencyRoutes = (app: Express) => {
  app.get("/api/v1/currencies", getCurrencyData)
}

export { currencyRoutes }
