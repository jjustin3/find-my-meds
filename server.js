const express = require('express')
const app = express()
const port = 3000

const path = __dirname + '/dist/'
app.get('/', function (req, res) {
  res.sendFile(path + 'index.html')
})

app.use(express.static(path))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
