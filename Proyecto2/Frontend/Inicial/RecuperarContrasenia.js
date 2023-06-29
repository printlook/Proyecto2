function RecuperarContrasenia() {
    var nombre_usuario = document.getElementById("RecuperarContrasenia-nombre_usuario").value

    var objeto = {
        'nombre_usuario': nombre_usuario
    }
    console.log(objeto)

    fetch('http://localhost:3000/recuperarContrasenia', {
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
                alert("No se encuentra el usuario")
            } else {
                console.log(response.data)
                alert("Su contraseña es:\n" + response.data)
            }
        })
}