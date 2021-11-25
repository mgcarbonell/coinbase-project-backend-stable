import React, { useState, useEffect } from "react"

function App() {
  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, [])
  return <div>"App"</div>
}

export default App
