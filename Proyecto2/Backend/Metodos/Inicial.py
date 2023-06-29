from Clases.Usuario import Usuario

def RegistrarUsuario(datos, usuarios):
    nombre = datos['nombre']
    apellido = datos['apellido']
    nombre_usuario = datos['nombre_usuario']
    contrasenia = datos['contrasenia']
    tipo = int(datos['tipo'])
    
    for usuario in usuarios:
        # si ya existe ese nombre de usuario
        if(usuario['nombre_usuario'] == nombre_usuario):
            return {'data':'', 'status': 400}
        
    # si no existe el usuario agregarlo al listado
    nuevoUsuario = Usuario(nombre, apellido, nombre_usuario, contrasenia, tipo)
    usuarios.append(nuevoUsuario.toDict())
    return {'data':'OK', 'status': 200}

def RecuperarContrasenia(datos, usuarios):
    nombre_usuario = datos['nombre_usuario']
    
    for usuario in usuarios:
        # buscar el usuario para retornar la contraseña
        if(usuario['nombre_usuario'] == nombre_usuario):
            return {'data':usuario['contrasenia'], 'status': 200}
        
    # si no existe el usuario retornar un error
    return {'data':'F', 'status': 400}
 
def IniciarSesion(datos, usuarios):
    nombre_usuario = datos['nombre_usuario']
    contrasenia = datos['contrasenia']
    
    usuario = {}
    status = 400
    usuarioEnSesion = -1
    
    for i in range(len(usuarios)):
        user = usuarios[i]
        if(user['nombre_usuario'] == nombre_usuario and user['contrasenia'] == contrasenia):
            usuario = user
            status = 200
            usuarioEnSesion = i
            break

    return {'data':usuario, 'status': status, 'usuarioEnSesion': usuarioEnSesion}   
    
        

    