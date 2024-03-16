
const express = require('express');
const app = express();
const database = require('./database1');
app.set('port', 3000);
app.get('/film', async (req, res) => {
    const connection = await database.getConnection();
    const resultado = await connection.query("SELECT * FROM film limit 10");
    res.json(resultado);
});

app.listen(app.get('port'));
console.log('Escuchando en el puerto' + app.get('port'));



/*
const contenedorTarjetas = document.getElementById("productos-container");

Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js 
function crearTarjetasProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevaBicicleta = document.createElement("div1");
        nuevaBicicleta.classList = "tarjeta-producto"
        nuevaBicicleta.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Bicicleta 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
        contenedorTarjetas.appendChild(nuevaBicicleta);
        nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto))
    });
}
crearTarjetasProductosInicio(bicicletas);*/