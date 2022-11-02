alert("ME PITA EL OIDO");

var nombre = "paquito";
var altura = 180;

var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");

datos.innerHTML = `
    <h2>Mi nombre es -> ${nombre}</h2>
    <h3> y mido ${altura}</h3>

`;

if (altura >= 160) {
  datos.innerHTML = `<h1>Eres alto xd</h1>`;
} else {
  datos.innerHTML += `<h1>Eres un hobbit xd</h1>`;
}

for (var i = 1990; i < 2200; i++) {
  datos.innerHTML += `<h2>Estamos en el año: ${i}</h2>`;
}

function muestraMiNombre(nombre, altura) {
  var datos = document.getElementById("datos");
}
