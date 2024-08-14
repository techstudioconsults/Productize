const express = require('express')
const path = require('path');

const PORT = process.env.PORT;

const app = express();
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT);