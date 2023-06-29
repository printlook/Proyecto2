var objeto = { 'nombrePelicula': sessionStorage.peliculaVer }

getPelicula();
getComentarios();


function getPelicula() {
    fetch(`http://localhost:3000/getPelicula`, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(res => res.json())
        .catch(err => {
            console.error('Error:', err)
            alert("Ocurrio un error")
        })
        .then(response => {
            console.log(response)
            pelicula = response.data
            document.getElementById("VerPelicula-nombre").value = pelicula.nombre
            document.getElementById("VerPelicula-genero").value = pelicula.genero
            document.getElementById("VerPelicula-clasificacion").value = pelicula.clasificacion
            document.getElementById("VerPelicula-anio").value = pelicula.anio
            document.getElementById("VerPelicula-duracion").value = pelicula.duracion
            document.getElementById("VerPelicula-link").value = pelicula.link
            document.getElementById("video").src = pelicula.link
        })
}

function getComentarios() {
    fetch(`http://localhost:3000/getComentarios`, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(res => res.json())
        .catch(err => {
            console.error('Error:', err)
            alert("Ocurrio un error")
        })
        .then(response => {
            console.log(response)
            actualizarTabla(response.data)
        })
}

function actualizarTabla(registros) {
    cadena = ``;
    registros.forEach(element => {
        cadena += `<tr>
            <td> ${element.autor} </td>
            <td> ${element.mensaje} </td>
            </tr>`
    });

    var tbody = document.getElementById('comentarios');
    tbody.innerHTML = cadena
}


