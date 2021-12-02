import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { QueryClientProvider } from "react-query"
import { queryConfig } from "./util/queryConfig"

ReactDOM.render(
  <QueryClientProvider client={queryConfig}>
    <App />
  </QueryClientProvider>,

  document.getElementById("root")
)
