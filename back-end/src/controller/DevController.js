const axios = require("axios")// 15.6K
const Dev = require("../models/Dev")
const parseStringAsArray = require('../utils/parseStringAsArray')
 
module.exports = {
    async index(resquest, response){

        const devs = await Dev.find()
        return response.json(devs)

    },
    async store (request,response) {  // Função que ao executar a rota /devs aciona o comando de inserção de dados a uma variavel 
        const { github_username, techs, latitude, longitude } = request.body // a variável recebe os dados com os nomes de usuario do github cadastrados na api

        let dev = await Dev.findOne({ github_username })

        if(!dev){

        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`) // essa execução é uma chamada do axios para utilizar a api do github, que fornce os dados de um determinado usuario
        const {name = login, avatar_url, bio} = apiResponse.data // Aqui esta sendo aplicado a variavel cada elemento obtido na busca da variavel anterior, ou seja, os dados do usuario.
        const techsArray = parseStringAsArray(techs)
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    
        dev = await Dev.create({
            github_username, 
            name,
            avatar_url,
            location,
            bio, 
            techs: techsArray,
            
        })
    }
    
        return response.json(dev)
    }
}