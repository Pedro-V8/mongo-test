const Image = require('../models/images')

module.exports = {
    async adiciona(req , res){
        try {
            const img = await Image.create(req.body)
            return res.send({ img })
        } catch (error) {
            console.log(error)
        }
    }
}