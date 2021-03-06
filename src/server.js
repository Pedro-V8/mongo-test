const app = require('express')()
require('dotenv').config()
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())
app.use(routes)

app.get('/' , (req , res) => {res.send('Ok')})


app.listen(process.env.PORT || 3333, (req , res) => {
    console.log('App listen on port 3333')
})

