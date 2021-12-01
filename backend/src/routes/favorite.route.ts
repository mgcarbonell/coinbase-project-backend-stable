import { Express } from "express"
import {
  getFavorite,
  getSingleFavorite,
  createFavorite,
  deleteFavorite,
  updateFavorite,
} from "../controllers/favorite.controller"

const favoriteRoutes = (app: Express) => {
  app.get("/api/v1/favorite", getFavorite)
  app.get("/api/v1/favorite/:id", getSingleFavorite)
  app.post("/api/v1/favorite", createFavorite)
  app.delete("/api/v1/favorite/:id", deleteFavorite)
  app.put("/api/v1/favorite/:id", updateFavorite)
}

export default favoriteRoutes
