const express = require('express')
const imageController = require('./controller/imageController')
const routes = express.Router()


routes.get('/imagens' , imageController.retorna)
routes.post('/add' , imageController.adiciona)
routes.post('/delete' , imageController.delete)

module.exports = routes