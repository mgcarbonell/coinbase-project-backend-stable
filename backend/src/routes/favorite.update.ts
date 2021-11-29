import express from "express"
import { Favorite } from "../entity/favorite.entity"

const router = express.Router()

// update the note

router.put("/api/v1/favorite/:id", async (req, res) => {
  const { id } = req.params
  const { note } = req.body.note
  const favorite = await Favorite.findOne(parseInt(id))
  return res.json(favorite)
})

export { router as updateFavorite }
