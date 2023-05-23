// Importar el modulo http
import http from 'http';

// Importar express
import express from 'express';


// Crear una instancia de express
const app = express(); // (req,res)=> {Un monto de codigo}

// Registrando nuestro primer middleware
app.use((req, res, next)=>{
    console.log("📣 Ejecutando el Middleware 1");
    // Invocando al siguiente Middleware
    next();
});

app.use((req, res, next)=>{
    console.log(`${req.method} - ${req.url}`);
    next();
});

app.use((req,res)=>{
    console.log("⭐ Respondiendo al cliente");
    res.send(`
    <h1>Welcome to express</h1>
    <p>This is my awesome app</p>
    `);
});

// Creando el servidor
// const server = http.createServer(app);

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el server
app.listen(port,ip, (err)=>{
    console.log("📣 Sirviendo en htpp//:localhost:3000");
    console.log(`📣 Sirviendo en htpp//:${process.env.ip}:${process.env.PORT}`);
});