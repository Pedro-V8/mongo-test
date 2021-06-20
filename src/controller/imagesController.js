const { deleteMany } = require('../models/images')
const Image = require('../models/images')

module.exports = {
    async adiciona(req , res){

        try {

            const img = Image.create(req.body)

            return res.send(img)
        } catch (error) {
            console.log(error)
        }
    },
    async retorna(req , res) {
        const random = (num) => Math.floor(Math.random() * num);
        let arrayCliente = []
        try {


            const results = await Image.find()
            while(arrayCliente.length < 10){
                let imagem = random(results.length)
                if(arrayCliente.indexOf(results[imagem]) === -1)
                {
                    arrayCliente.push(results[imagem])
                }
            }

            
            //return res.send(results)
            return res.send(arrayCliente)
        } catch (error) {
            console.log(error)
        }
    },

    async delete(req , res){
        try {
            const { id } = req.body
            console.log(id)
            await Image.deleteOne({_id: id})
            return res.send('Deleted')
        } catch (error) {
            
        }
    }
}