import React, { FunctionComponent } from "react"
import { useState, useEffect } from "react"

const App: FunctionComponent = () => {
  const sanityCheck = () => {
    fetch("http://localhost:4000/api/v1/health")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    sanityCheck()
  }, [])
  return <div>"App"</div>
}

export default App
