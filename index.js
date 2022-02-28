const express = require("express");
const bodyParser = require("body-parser");


let usuario = {
    nombre:'',
    apellido:''
}

let respuesta = {
    error:false,
    codigo:200,
    mensaje:''
}


const app = express()
const jsonParser = bodyParser.json()

app.get("/",function(req,res){
    let respuesta = {
        error:true,
        codigo:200,
        mensaje:'Inicio'
    }
    res.send(respuesta)
})

app.get("/hola",function(req, res){
    console.log("mensaje")
    res.send("hola desde endpoint hola")
})


app.get('/usuario', function(req,res){
    if(usuario.nombre==='' || usuario.apellido === '' ){
        respuesta = {
            error:true,
            codigo:500,
            mensaje:'El usuario no existe'
        }   
    }else{
        respuesta = {
            error:false,
            codigo:200,
            mensaje:usuario
        }   
    }
    res.send(respuesta)
})

app.post('/usuario',jsonParser,function(req,res){
    if(req.body.nombre === '' || req.body.apellido === ''){
        respuesta = {
            error:true,
            codigo:500,
            mensaje:'El nombre y apellido son requeridos'
        }  
    }else if(usuario.nombre !== '' || usuario.apellido !== '' ){
        respuesta = {
            error:true,
            codigo:500,
            mensaje:'Ya existe un usuario creado'
        }
    }else{
        usuario.nombre = req.body.nombre
        usuario.apellido = req.body.apellido
        respuesta = {
            error:false,
            codigo:200,
            mensaje:'Usuario creado' + ' ' + usuario.nombre + ' ' + usuario.apellido
        }
    }
    res.send(respuesta)
})

app.put('/usuario',jsonParser,function(req,res){
    if(req.body.nombre === '' || req.body.apellido === ''){
        respuesta = {
            error:true,
            codigo:500,
            mensaje:'El nombre y apellido son requeridos'
        }  
    }else{
        usuario.nombre = req.body.nombre
        usuario.apellido = req.body.apellido
        respuesta = {
            error:false,
            codigo:200,
            mensaje:'Usuario updated' + ' ' + usuario.nombre + ' ' + usuario.apellido
        }
    }
    res.send(respuesta)
})

app.delete('/usuario',jsonParser,function(req,res){
    if(req.body.nombre === '' || req.body.apellido === ''){
        respuesta = {
            error:true,
            codigo:500,
            mensaje:'El nombre y apellido ya están en blanco'
        }  
    }else{
        usuario.nombre = '',
        usuario.apellido = ''
        respuesta = {
            error:false,
            codigo:200,
            mensaje:'Usuario borrado' + ' ' + req.body.nombre + ' ' + req.body.apellido
        }
    }
    res.send(respuesta)
})



app.listen(3001,()=>{
    console.log("app running on port 3001")
})


