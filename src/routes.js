const express = require('express')
const imageController = require('./controller/imageController')
const routes = express.Router()



routes.post('/add' , imageController.adiciona)

module.exports = routes