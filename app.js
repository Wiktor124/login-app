const express = require('express');
const app = express()

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log('Server on port 3000')
})
app.get('/', (req, res) => {
  res.send('la pagina ya funciona')
})
