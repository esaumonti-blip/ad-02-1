const h1Elemento = document.getElementById("title");
const h4Elemento = document.getElementById("orange");

h1Elemento.textContent ="Adiós";
h4Elemento.style.color ="orange";

h1Elemento.addEventListener("click",(event)=>{
    console.log(event);
    h1Elemento.style.color="brown";
})
