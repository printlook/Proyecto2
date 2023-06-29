

function IniciarSesion() {
    var nombre_usuario = document.getElementById("Login-nombre_usuario").value
    var contrasenia = document.getElementById("Login-password").value

    var objeto = {
        'nombre_usuario': nombre_usuario,
        'contrasenia': contrasenia,
    }
    console.log(objeto)

    fetch('http://localhost:3000/iniciarSesion', {
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
                alert("Datos incorrectos")
            } else {
                usuario = response.data;
                window.UsuarioEnSesion = response.data;
                if (usuario.tipo == 1) {
                    alert("Bienvenido administrador")
                    location.href = "../Administrador/ModificarPerfil.html"
                } else {
                    alert("Bienvenido cliente")
                }
            }
        })
}