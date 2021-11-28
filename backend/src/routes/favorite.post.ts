import express from "express"
import { Favorite } from "../entity/favorite.entity"

const router = express.Router()

router.post("/api/v1/favorite", async (req, res) => {
  const { cryptoName, note } = req.body

  const favorite = Favorite.create({
    cryptoName: cryptoName,
    note: note,
  })

  await favorite.save()

  return res.json(favorite)
})

export { router as createFavoriteRouter }
