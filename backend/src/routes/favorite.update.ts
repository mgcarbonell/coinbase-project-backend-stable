import express from "express"
import { logger } from "../util/logger"
import { getManager } from "typeorm"
import { Favorite } from "../entity/favorite.entity"

const router = express.Router()

// update the note

router.put("/api/v1/favorite/:id", async (req, res) => {
  // const entityManager = getManager()
  // const { id } = req.params
  // const { cryptoName, note } = req.body
  // const favorite = await entityManager.findOne(Favorite, parseInt(id))
  // favorite.note = note
  // await entityManager.save(favorite)
  // await res.json(favorite)
  const { id } = req.params
  const { cryptoName, note } = req.body
  const entityManager = getManager()
  const favorite = await Favorite.findOne(parseInt(id, 10))
  favorite.note = note
  await entityManager.save(favorite)

  if (!favorite) {
    return res.json({
      message: "No favorite found.",
    })
  }

  return res.json(favorite)
})
export { router as updateFavorite }
