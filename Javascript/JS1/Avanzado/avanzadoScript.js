function generarTabla(filas, columnas) {
  datosTablita = document.getElementById("tablita");

  const arrayNombres = ['Paco','Manue','Juanmita','Richi','Quile','Fran','Javi','Carlos','Andreilla']
  let creadorTabla = "";

  for (let f = 0; f < filas; f++) {
    creadorTabla += `<tr>`;
    for (let c = 0; c < columnas; c++) {
      creadorTabla += `<td>${arrayNombres[Math.floor(Math.random() * arrayNombres.length )]}</td>`;
    }
    creadorTabla += `</tr>`;
  }
  datosTablita.innerHTML += creadorTabla;
}

//Las columnas y filas se insertan en el html.


