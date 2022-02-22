// aquí adentro va javascript
// ojo - cambio de comentarios

// declarar variables
// no hay tipos rígidos
x = 5;
x = "esto se puede";
console.log("HOLA DESDE AFUERA");

function ejemplo(){

    console.error("HOLA A TODOS");
    //alert("HOLA A TODOS");
}

function boton2(){
    alert("BOTON 2");
}

function boton3(){
    alert("BOTON 3");

    // el documento se encuentra jerarquizado en una estructura que se llama
    // DOM - Document Object Model

    // podemos acceder a un elemento específico por medio de id
    document.getElementById("parrafito").innerHTML = "<h1>CAMBIE PARA SIEMPRE.</h1>";
}