const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
})

app.listen('3000', () => {
  console.log('Port open and listening')
})