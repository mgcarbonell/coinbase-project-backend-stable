import React, { FC, useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import { IServer } from "./lib/interfaces/IServer"
import axios, { AxiosResponse } from "axios"

const url: any = process.env.REACT_APP_SERVER_HEALTH
console.log(url)

const App: FC = () => {
  useEffect(() => {
    axios.get<IServer>(url).then((response: AxiosResponse) => {
      console.log("Response", response.data)
    })
  }, [])
  return (
    <div>
      <Grid></Grid>
    </div>
  )
}

export default App
