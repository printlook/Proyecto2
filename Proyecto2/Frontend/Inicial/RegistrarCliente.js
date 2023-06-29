function RegistrarCliente() {
    var nombre = document.getElementById("Registro-nombre").value
    var apellido = document.getElementById("Registro-apellido").value
    var nombre_usuario = document.getElementById("Registro-nombre_usuario").value
    var contrasenia = document.getElementById("Registro-password").value

    var objeto = {
        'nombre': nombre,
        'apellido': apellido,
        'nombre_usuario': nombre_usuario,
        'contrasenia': contrasenia,
        'tipo': 2 // tipo cliente
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
                alert("Usuario registrado!")
                location.href = "../PaginaPrincipal.html"
            }
        })
}