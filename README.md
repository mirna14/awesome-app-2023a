# awesome-app-2023a
Proyecto de aprendizaje de la plataforma express.js

METODOLOGIA BEM

Selectores 
pseudoselectores: permiten controlar un estilo

dentro de shop.html agregar lo siguiente
dentro del body
<style>
    body {
        padding:0;
        margin:9;
        font-family: sans-serif;
    }
    main {
        padding: 1rem;
    }

    .main-header{
        width: 100%;
        height: 3.5rem;
        background-color: #388087;
        padding: 0 1.5rem;
    }

    .main-header__nav{
        height: 100%;
        display: flex;
        align-items: center;
    }

    .main-header__item-list{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }

    .main-header__item{
        margin: 0 1rem;
        padding: 0;
    }

    .main-header__item a {
        text-decoration: none;
        color: white

    }

    .main-header__item a:hover,
    .main-header__item a:active,
    .main-header__item a.active,  {
        color: #C2EDCD;
    }
</style>
COPIAR ESTILOS Y HEADER A add.product.html
pasar active abajo cuando se hacen los cambios

crear clase form
<form class="product-form" action="">
.form-control y dar enter

<label for="title">Title</label>

poner el boton fuera del div

depues del ultimo estilo

<style>

.product-form{
    width: 20rem;
    max-width: 90%;
    margin: auto;
}

.form-control{
    margin: 1rem 0;
}

.form-control label,
.form-control input {
    display: block;
    width: 100%;
}

.form-control label {
    color: #222;
}

.form-control input {
    border: 1px solid #6FB3B8;
    font: inherit;
    border-radius: 2px; 
    color: #388087;
}

button {
    font: inherit;
    border: 1px solid #6FB3B8;
    color: #C2EDCE;
    background: #6FB3B8;
    cursor: pointer;
}

button:hover,
button:active{
    background-color: #388087;
}
<style>

--------------------------
<body style="border-style: dashed; border-color: blue;">
<header class="main-header">
<nav class="main-header_nav">
<ul class="main-header__item-list">
<li class="main-header__item">
<a class="active" href="/">shop</a>
</li>
<li class="main-header__item">

hacer commit ESTILIZANDO PAGINAS