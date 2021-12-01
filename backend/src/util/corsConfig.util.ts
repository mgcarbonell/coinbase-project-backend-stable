import cors from "cors"

const accessList: string = process.env.CLIENT_URL
const options: cors.CorsOptions = {
  origin: accessList,
}

export { options as corsConfig }
