const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(routes)

app.get('/' , (req , res) => {res.send('Ok')})


app.listen('3333' , (req , res) => {
    console.log('App listen on port 3333')
})

