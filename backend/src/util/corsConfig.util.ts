import cors from "cors"

const accessList: string[] = [process.env.CLIENT_URL, "http://localhost:3000"]
const options: cors.CorsOptions = {
  origin: "accessList",
  methods: "GET,PUT,POST,DELETE,OPTIONS",
}

export { options as corsConfig }
