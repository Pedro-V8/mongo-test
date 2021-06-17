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
        try {
            //let arrayCliente = []
            const results = await Image.find()
            //while(arrayCliente.length < results.length){
                //let imagem = random(results.length)
                //if(arrayCliente.indexOf(imagem) === -1)
                //{
                   // arrayCliente.push(results[imagem])
                //}
            //}

            
            return res.send(results)
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