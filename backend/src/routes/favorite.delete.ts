import express from "express"
import { Favorite } from "../entity/favorite.entity"

// destroy a favorite
const router = express.Router()

router.delete("/api/v1/favorite/:id", async (req, res) => {
  const { id } = req.params

  const response = await Favorite.delete(parseInt(id, 10))

  return res.json(response)
})

export { router as deleteFavoriteRouter }
