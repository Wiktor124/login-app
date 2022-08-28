const express = require('express');
const app = express()

const PORT = process.env.PORT || 3000 

app.get('/', (req, res) => {
  res.send('la pagina ya funciona')
})

app.listen(PORT, (req, res) => {
  console.log('Server on port 3000')
})