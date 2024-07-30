const connectToMongo = require('./db');
const express = require('express')
const cors =require('cors');

connectToMongo();

const app = express()

app.use(express.json())
app.use(cors());

//Avaliable routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/journals',require('./routes/journals'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5000)