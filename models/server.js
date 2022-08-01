const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app =  express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //midelwares 
        this.middlewares();
        //rutas de mi applicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //lectura y parseo del body | post
        this.app.use(express.json());
        
        //directorio publico
        this.app.use(express.static('public'))//use es la palabra clave para saber q esto es un midelware

    }

    //crear el metodo routes 

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en puerto',this.port)
        });
    }
}
module.exports= Server;