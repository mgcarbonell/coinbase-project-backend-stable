import { Request, Response, NextFunction } from "express"
import { Favorite } from "../entities/favorite.entity"
import { getManager } from "typeorm"

const getFavorite = async (req: Request, res: Response, next: NextFunction) => {
  const favorite = await Favorite.find()
  if (!favorite) {
    return res.send({ message: "No favorites found" })
  } else {
    return res.json(favorite)
  }
}

const getSingleFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  const favorite = await Favorite.findOne(parseInt(id, 10))

  if (!favorite) {
    return res.json({
      message: "No favorite found.",
    })
  }

  return res.json(favorite)
}

const createFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // post a new favorite
  const { cryptoName, note } = req.body

  const favorite = Favorite.create({
    cryptoName: cryptoName,
    note: note,
  })

  await favorite.save()

  return res.json(favorite)
}

const deleteFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  const response = await Favorite.delete(parseInt(id, 10))

  return res.json(response)
}

const updateFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
}

export {
  getFavorite,
  getSingleFavorite,
  createFavorite,
  deleteFavorite,
  updateFavorite,
}
