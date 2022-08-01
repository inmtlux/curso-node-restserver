const {response , request} = require('express');

const usuariosGet =(req, res = response)=> {

    const {q,nombre = "no name", apik,page = 1,limit} = req.query;//tambien se puede desestructurar
    // res.status | la implementacio nresponse fue necesario para tener mas res para loas 402
    res.json({//loq  normalmente mandaremos e sun objeto
        msg: "get API - controller",
        q,nombre,apik,page,limit

    });
}

const usuariosPut=(req, res)=> {

    const id = req.params.id;

    res.json({
        msg: "put API . controller",
        id
    });
}

const usuariosPost = (req, res)=> {
    //extraer el body | datos del postman etc
    const usuario = req.body;//tambien se le pude desestructurar obteniendo directamente los resultados usuario={nombre,id}
    res.json({
        msg: "post API - controller",
        usuario//cambio de nombre,edad

    });
}

const usuariosDelete = (req, res)=> {
    res.json({
        msg: "delete API - controller"

    })
}

const usuariosPatch = (req, res)=> {
    res.json({
        msg: "patch API - controller"

    })
}

module.exports= {//como exportaremos muchos controladores lo haremos en un objeto
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}