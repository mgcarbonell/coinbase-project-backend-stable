// imports
require("dotenv").config()
const express = require("express")
const session = require("express-session")
const morgan = require("morgan")

// const routes = require("./routes")

const port = process.env.PORT || 4000
const app = express()

app.use(morgan("dev"))

app.use(express.json())

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100 * 60 * 60 * 24,
    },
  })
)

app.get("/hello", (req, res) => res.json({ hello: "hello" }))

app.listen(port, () => console.log(`Server Running on Port: ${port}`))
