const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./router')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    console.log("Servidor Rodando");
})