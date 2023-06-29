getUsuarios();

function RegistrarAdmin() {
    var nombre = document.getElementById("Registro-nombre").value
    var apellido = document.getElementById("Registro-apellido").value
    var nombre_usuario = document.getElementById("Registro-nombre_usuario").value
    var contrasenia = document.getElementById("Registro-password").value

    var objeto = {
        'nombre': nombre,
        'apellido': apellido,
        'nombre_usuario': nombre_usuario,
        'contrasenia': contrasenia,
        'tipo': 1 // tipo admin
    }
    console.log(objeto)

    fetch('http://localhost:3000/registrarUsuario', {
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
                alert("Administrador registrado!")
                location.reload()
            }
        })
}

function getUsuarios() {
    fetch('http://localhost:3000/getUsuarios', {
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

function actualizarTabla(registros) {
    cadena = ``;
    registros.forEach(element => {
        if (element.nombre_usuario != 'admin') {
            cadena += `<tr>
                <td> ${element.nombre_usuario} </td>
                <td> ${element.nombre} </td>
                <td> ${element.apellido} </td>
                <td>
                    <button value=${element.nombre} onclick="eliminar('${element.nombre_usuario}')" class="btn btn-danger">Eliminar</button>
                </td>
                </tr>`
        }
    });

    var tbody = document.getElementById('usuarios');
    tbody.innerHTML = cadena
}

function eliminar(nombre_usuario) {
    fetch('http://localhost:3000/eliminarUsuario', {
        method: 'POST',
        body: JSON.stringify({ 'nombreUsuario': nombre_usuario }),
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
                alert("Usuario eliminado!");
                // refrescar página
                location.reload();
            }
        })
}
