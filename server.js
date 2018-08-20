const express = require('express')
require('noodle-it')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  console.log("sending another lulz")
  res.send("corey.")
})


app.listen(port, () => console.log(`Listening on port ${port}`))
