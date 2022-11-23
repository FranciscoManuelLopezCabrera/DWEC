const cuadro_btn = document.querySelectorAll(".cuadro");
const info = document.getElementById("info");
const juego_btn = document.getElementById("boton");
let scoreO = 0;
let scoreX = 0;

document.getElementById('contadorX').innerHTML = `Victorias '&#10060': ${scoreX}`;
document.getElementById('contadorO').innerHTML = `Victorias '&#11093': ${scoreO}`;

var i = 1;
const jBtn_e = "pointer-events:initial;opacity:initial;",
  jBtn_d = "pointer-events:none;opacity:40%;";
let estado = false;

var ganarPartida = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function comprobar() {
  juego_btn.style.cssText = jBtn_d;
  for (var j = 0; j < ganarPartida.length; j++) {
    if (
      cuadro_btn[ganarPartida[j][0]].innerHTML === "X" &&
      cuadro_btn[ganarPartida[j][1]].innerHTML === "X" &&
      cuadro_btn[ganarPartida[j][2]].innerHTML === "X"
    ) {
      info.innerHTML = '<u>Jugador <b>"X"</b> Gana</u>';
      scoreX++;
      document.getElementById('contadorX').innerHTML = `Victorias '&#10060': ${scoreX}`;
      estado = true;
      deshabilitarCasillas();
    } else if (
      cuadro_btn[ganarPartida[j][0]].innerHTML === "O" &&
      cuadro_btn[ganarPartida[j][1]].innerHTML === "O" &&
      cuadro_btn[ganarPartida[j][2]].innerHTML === "O"
    ) {
      info.innerHTML = '<u>Jugador <b>"O"</b> Gana</u>';
      scoreO++;
      document.getElementById('contadorO').innerHTML = `Victorias '&#11093': ${scoreO}`;
      estado = true;
      deshabilitarCasillas();
    }
  }
  if (
    cuadro_btn[0].innerHTML != "" &&
    cuadro_btn[1].innerHTML != "" &&
    cuadro_btn[2].innerHTML != "" &&
    cuadro_btn[3].innerHTML != "" &&
    cuadro_btn[4].innerHTML != "" &&
    cuadro_btn[5].innerHTML != "" &&
    cuadro_btn[6].innerHTML != "" &&
    cuadro_btn[7].innerHTML != "" &&
    cuadro_btn[8].innerHTML != "" &&
    estado == false
  ) {
    info.innerHTML = "<b>EMPATE</b>";
    deshabilitarCasillas(false);
  }
}

function deshabilitarCasillas(y) {
  y == false ? (i = Math.floor(Math.random() * (3 - 1)) + 1) : 0;
  for (var n_boton = 0; n_boton < cuadro_btn.length; n_boton++) {
    cuadro_btn[n_boton].style.setProperty("pointer-events", "none");
  }
  juego_btn.style.cssText = jBtn_e;
}

function nEmpieza() {
  juego_btn.style.cssText = jBtn_d;
  let c1;
  i % 2 == 0 ? (c1 = "X") : (c1 = "O");
  info.innerHTML = `Presione cualquier cuadro para iniciar: Empieza el jugador <b>"${c1}"</b>.`;
}

cuadro_btn.forEach((boton) => {
  boton.onclick = function () {
    info.innerHTML = "";
    i % 2 == 0 ? (boton.innerHTML = "X") : (boton.innerHTML = "O");
    comprobar();
    boton.style.setProperty("pointer-events", "none");
    i++;
    i == 3 ? (i = 1) : 0;
  };
});

juego_btn.onclick = function () {
  for (var n_boton = 0; n_boton < cuadro_btn.length; n_boton++) {
    cuadro_btn[n_boton].style.cssText = "pointer-events:initial;";
    cuadro_btn[n_boton].innerHTML = "";
    estado = false;
  }
  nEmpieza();
};

nEmpieza();
