var paises = [
    {
        "pais": "España",
        "capital": "Madrid"
    },
    {
        "pais": "Alemania",
        "capital": "Berlín"
    },
    {
        "pais": "Albania",
        "capital": "Tirana"
    },
    {
        "pais": "Andorra",
        "capital": "Adorra la Vella"
    },
    {
        "pais": "Francia",
        "capital": "Paris"
    },
    {
        "pais": "Reino Unido",
        "capital": "Londres"
    },
    {
        "pais": "Bélgica",
        "capital": "Bruselas"
    },
    {
        "pais": "Croacia",
        "capital": "Zagreb"
    },
    {
        "pais": "Dinamarca",
        "capital": "Copenhage"
    },
    {
        "pais": "Eslovaquia",
        "capital": "Bratislava"
    },
    {
        "pais": "Estonia",
        "capital": "Tallin"
    },
    {
        "pais": "Finlandia",
        "capital": "Helsinki"
    },
    {
        "pais": "Italia",
        "capital": "Roma"
    },
    {
        "pais": "Luxemburgo",
        "capital": "Luxemburgo"
    },
    {
        "pais": "Monáco",
        "capital": "Moncáco"
    },
    {
        "pais": "Países Bajos",
        "capital": "Ámsterdam"
    },
    {
        "pais": "Polonia",
        "capital": "Varsovia"
    },
    {
        "pais": "Portugal",
        "capital": "Lisboa"
    },
    {
        "pais": "Rusia",
        "capital": "Moscú"
    }
]

let tablas = document.getElementById("tabla");

let generarTabla = '';

generarTabla += `<tr><td><h3>Capital</h3></td><td><h3>Pais</h3></td></tr>`;

for (x of paises) {
    generarTabla += `<tr><td>${x.capital}</td><td>${x.pais}</td</tr>`
}

tablas.innerHTML += generarTabla;




function scriptBuscadorCapital() {
    
    var input
    var filtro
    var table
    var tr
    var td
    var txtValue
    
    input = document.getElementById("filtro1");
    filtro = input.value;
    table = document.getElementById("tabla");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filtro) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function scriptBuscadorPais() {
    
    var input
    var filtro
    var table
    var tr
    var td
    var txtValue
   
    input = document.getElementById("filtro2");
    filtro = input.value;
    table = document.getElementById("tabla");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filtro) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}