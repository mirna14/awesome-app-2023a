
// Importar express
import express from 'express';
import { log } from 'console';


// Crear una instancia de express
const app = express(); // (req,res)=> {Un monto de codigo}

// Middleware de parseo de datos del cliente
app.use(express.urlencoded({ extended: true}));

// Registrando nuestro primer middleware
app.use((req, res, next)=>{
    console.log("📣 Ejecutando el Middleware 1");
    // Invocando al siguiente Middleware
    next();
});



app.use((req, res, next)=>{
    console.log(`✨ ${req.method} - ${req.url}`);
    next();
});

app.use('/about', (req, res)=>{
    res.send(`
    <h1 style="color: teal">About...</h1>
    <p style="color: #555"> Esta pagina creada para aprender 
    desarrollo web en Fullstack con JS</p>
    `);
});

// GET /add-product
app.use('/add-product',(req,res,next)=>{
    if(req.method === "POST") return next();
    // Sirviendo el formulario
    console.log("📣 Sirviendo el  formulario");
    res.send(`
    <form action="/add-product" method="POST">
        <label for="title">Title</label>
        <input id="title" type=text" name="title">
        <label for="description">Description</label>
        <input id="description" type="text" name="description">
        <button type="submit">Add Product</button>
    </form>
    `);
});

// Post /add-product
app.use('/add-product',(req,res)=>{
    // Realizando una extraccion de los
    // datos en la peticion
    for(const prop in req.body){
        console.log(`PROP: ${prop} : ${req.body[prop]}`);
    }
    // Redireccion
    res.redirect("/");
});

app.use((req,res)=>{
    console.log("⭐ Respondiendo al cliente");
    res.send(`
    <h1>Bienvenido a express</h1>
    <p>Este es mi software</p>
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
    //console.log(`📣 Sirviendo en htpp//:${process.env.ip}:${process.env.PORT}`);
});