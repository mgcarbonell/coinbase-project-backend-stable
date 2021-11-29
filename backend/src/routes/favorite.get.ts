import express from "express"
import { Favorite } from "../entity/favorite.entity"

const router = express.Router()

router.get("/api/v1/favorite/:id", async (req, res) => {
  // individual currency
  // findOne might be by ID, wonder if I can req.params
  const { id } = req.params

  const favorite = await Favorite.findOne(parseInt(id, 10))

  if (!favorite) {
    return res.json({
      message: "No favorite found.",
    })
  }

  return res.json(favorite)
})

router.get("/api/v1/favorite", async (req, res) => {
  const favorite = await Favorite.find()

  if (!favorite) {
    return res.send({ message: "No favorites found" })
  } else {
    return res.json(favorite)
  }
})

export { router as fetchFavoriteRouter }
