const express = require('express');

const Producto = require('../models/producto');

const app = express();

app.get('/', (req, res) => {
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método get para producto (Valor 5 puntos)
app.get('/producto/: nombre', (req, res) => {
    let nombre = req.params.nombre;

    productoSchema.findById(nombre, (err, productoSchema) => {
        if(err) res.status(500).send({message:`Error al realizar peticion ${err}`})
        if(!productoSchema) res.status(404).send({message:'Producto no existe'})

        res.status(200).send({productoSchema})
    });
});

// Deberá hacer aquí el método post para producto (Valor 5 puntos)

app.post('/producto', (req, res) =>{
    let body = req.body;

    let Producto = new Producto({
        nombre: body.nombre,
        precio: body.precio
    });
});

module.exports = app;