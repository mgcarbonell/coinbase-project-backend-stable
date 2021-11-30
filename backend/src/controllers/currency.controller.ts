// import services
// import { currencyService } from "../services/currency.services"
import axios from "axios"
import { Request, Response, NextFunction } from "express"

// export const getCurrencyData = currencyService

const getCurrencyData = async (req: Request, res: Response) => {
  try {
    const api = `https://api.exchange.coinbase.com/products`
    const response = await axios.get(api)
    let queryObject = res.json(response.data)
    return queryObject
  } catch (error) {
    res.json({ error })
  }
}

export { getCurrencyData }
