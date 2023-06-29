var objeto = { 'nombrePelicula': sessionStorage.peliculaEditar }

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
        document.getElementById("EditarPelicula-nombre").value = pelicula.nombre
        document.getElementById("EditarPelicula-genero").value = pelicula.genero
        document.getElementById("EditarPelicula-clasificacion").value = pelicula.clasificacion
        document.getElementById("EditarPelicula-anio").value = pelicula.anio
        document.getElementById("EditarPelicula-duracion").value = pelicula.duracion
        document.getElementById("EditarPelicula-link").value = pelicula.link
        // guardar posicionArreglo
        sessionStorage.setItem("posicionArreglo", pelicula.posicionArreglo)
    })

function EditarPelicula() {
    var nombre = document.getElementById("EditarPelicula-nombre").value
    var genero = document.getElementById("EditarPelicula-genero").value
    var clasificacion = document.getElementById("EditarPelicula-clasificacion").value
    var anio = document.getElementById("EditarPelicula-anio").value
    var duracion = document.getElementById("EditarPelicula-duracion").value
    var link = document.getElementById("EditarPelicula-link").value

    var objeto = {
        'nombre': nombre,
        'genero': genero,
        'clasificacion': clasificacion,
        'anio': anio,
        'duracion': duracion,
        'link': link,
        'posicionArreglo': sessionStorage.posicionArreglo
    }
    console.log(objeto)

    fetch('http://localhost:3000/editarPelicula', {
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
                alert("Pelicula actualizada!")
                location.href = "AdminPeliculas.html"
            }
        })
}