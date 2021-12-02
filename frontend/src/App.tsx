import { FC } from "react"
import { useQuery } from "react-query"
import Grid from "@mui/material/Grid"
import { Type } from "typescript"
import { Wrapper } from "./App.styles"

type serverHealthType = {
  health: string
}

const getServerHealth = async () => {
  try {
    return await (await fetch(process.env.REACT_APP_SERVER_CHECK)).json()
  } catch (err) {
    throw new Error(err)
  }
}

const App: FC = () => {
  const { data } = useQuery<serverHealthType, Error>("sanity-check")
  console.log(data)
  return (
    <Grid>
      <div className="App"> Hello!</div>
    </Grid>
  )
}

export default App
