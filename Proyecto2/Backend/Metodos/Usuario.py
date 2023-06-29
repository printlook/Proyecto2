from Clases.Usuario import Usuario

def GetUsuarioEnSesion(usuarios, usuarioEnSesion):
    usuario = {}
    status = 400
    if(usuarioEnSesion != -1):
        usuario = usuarios[usuarioEnSesion]
        status = 200
        
    # si no existe el usuario retornar un error
    return {'data':usuario, 'status': status}

def ModificarPerfil(datos, usuarios, usuarioEnSesion):
    if(usuarioEnSesion != -1):
        nuevoUsuario = Usuario(datos['nombre'], datos['apellido'], datos['nombre_usuario'],
                          datos['contrasenia'], datos['tipo'])

        usuarios[usuarioEnSesion] = nuevoUsuario.toDict()
        return {'data':usuarios, 'status': 200}
    return {'data':usuarios, 'status': 400}


 

    
        

    