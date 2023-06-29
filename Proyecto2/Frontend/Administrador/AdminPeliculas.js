getPeliculas();

var openFile = function (event) {
    var input = event.target;

    var reader = new FileReader();

    reader.onload = function () {
        var text = reader.result;
        var node = document.getElementById('output');
        node.innerText = text;
        console.log(text);
        mandarPeticion(text);

    };
    reader.readAsText(input.files[0]);
};

function mandarPeticion(textoo) {
    var objeto = {
        'texto': textoo
    }

    fetch('http://localhost:3000/cargarPeliculas', {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }).then(res => res.json())
        .catch(err => {
            console.error('Error:', err)
            alert("Ocurrio un error")
        }).then(response => {
            console.log(response);
            if (response.status == 400) {
                alert("Ocurrió un error")
            } else {
                // actualizar peliculas
                alert("siuuu");
                actualizarTabla(response.data);
            }
        })
}

function actualizarTabla(registros) {
    cadena = ``;
    registros.forEach(element => {
        // https://fontawesome.com/icons
        cadena += `<tr>
            <td> ${element.nombre} </td>
            <td> ${element.genero} </td>
            <td> ${element.clasificacion} </td>
            <td> ${element.anio} </td>
            <td> ${element.duracion} </td>
            <td> <button value=${element.nombre} onclick="editar('${element.nombre}')" class="btn btn-warning"><i class="fas fa-pen"></i></button>
            <button value=${element.nombre} onclick="eliminar('${element.nombre}')" type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button> 
            <button value=${element.nombre} onclick="ver('${element.nombre}')" type="button" class="btn btn-info"><i class="fas fa-eye"></i></button> </td>
            </tr>`
    });

    var tbody = document.getElementById('peliculas');
    tbody.innerHTML = cadena
}

function editar(nombre) {
    // guardar de forma global
    sessionStorage.setItem("peliculaEditar", nombre);
    location.href = "EditarPelicula.html"
}

function eliminar(nombre) {
    fetch('http://localhost:3000/eliminarPelicula', {
        method: 'POST',
        body: JSON.stringify({ 'nombrePelicula': nombre }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }).then(res => res.json())
        .catch(err => {
            console.error('Error:', err)
            alert("Ocurrio un error")
        }).then(response => {
            console.log(response);
            if (response.status == 400) {
                alert("Ocurrió un error")
            } else {
                alert("Pelicula eliminada!");
                // refrescar página
                location.reload();
            }
        })
}

function ver(nombre) {
    // guardar de forma global
    sessionStorage.setItem("peliculaVer", nombre);
    location.href = "VerPelicula.html"
}

function getPeliculas() {
    fetch('http://localhost:3000/getPeliculas', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }).then(res => res.json())
        .catch(err => {
            console.error('Error:', err)
            alert("Ocurrio un error")
        }).then(response => {
            console.log(response);
            if (response.status == 400) {
                alert("Ocurrió un error")
            } else {
                // actualizar peliculas
                actualizarTabla(response.data);
            }
        })
}