from Clases.Pelicula import Pelicula

def CargarPeliculas(datos):
    peliculas = []
    texto = datos['texto']
    
    # separacion del texto en lineas
    lineas = texto.split("\n")
    
    cont = 0
    for linea in lineas:
        # para omitir linea de encabezado
        if(cont==0):
            cont+=1
            continue
        
        #dividir la linea en columnas
        columnas = linea.split(";")
        
        if(len(columnas) != 6):
            continue
        
        # crear nueva pelicula
        nuevaPelicula = Pelicula(columnas[0], columnas[1], columnas[2], columnas[3], columnas[4], columnas[5])
        peliculas.append(nuevaPelicula.toDict())
        
    return {'data': peliculas, 'status': 200}

def GetPelicula(datos, peliculas):
    nombrePelicula = datos['nombrePelicula']
    pelicula = {}
    status = 400

    for i in range(len(peliculas)):
        movie = peliculas[i]

        if(movie['nombre'] == nombrePelicula):
            # para saber la posicion de la pelicula a actualizar
            pelicula = movie
            pelicula['posicionArreglo'] = i
            status = 200
        
    return {'data': pelicula, 'status': status}

def EditarPelicula(datos, peliculas):
    posicionArreglo = int(datos['posicionArreglo'])

    if(posicionArreglo != None):
        nuevaPelicula = Pelicula(datos['nombre'], datos['genero'], datos['clasificacion'],
                          datos['anio'], datos['duracion'], datos['link'])

        peliculas[posicionArreglo] = nuevaPelicula.toDict()
        return {'data':peliculas, 'status': 200}
    return {'data':peliculas, 'status': 400}

def EliminarPelicula(datos, peliculas):
    # https://www.geeksforgeeks.org/python-removing-dictionary-from-list-of-dictionaries/
    nombrePelicula = datos['nombrePelicula']
    nuevoPeliculas = []
    status = 400

    for i in range(len(peliculas)):
        movie = peliculas[i]

        # si la pelicula coincide con la que se quiere eliminar
        if(movie['nombre'] == nombrePelicula):
            status = 200
            # salta una iteración
            continue
        
        nuevoPeliculas.append(movie)
        
    return {'data': nuevoPeliculas, 'status': status}

def GetComentarios(datos, comentarios):
    nombrePelicula = datos['nombrePelicula']
    filtrados = []

    for comentario in comentarios:
        if(comentario['pelicula'] == nombrePelicula):
            # agregar a filtrados
            filtrados.append(comentario)
        
    return {'data': filtrados, 'status': 200}

def EliminarUsuario(datos, usuarios):
    # https://www.geeksforgeeks.org/python-removing-dictionary-from-list-of-dictionaries/
    nombreUsuario = datos['nombreUsuario']
    nuevoUsuarios = []
    status = 400

    for i in range(len(usuarios)):
        user = usuarios[i]

        # si la pelicula coincide con la que se quiere eliminar
        if(user['nombre_usuario'] == nombreUsuario):
            status = 200
            # salta una iteración
            continue
        
        nuevoUsuarios.append(user)
        
    return {'data': nuevoUsuarios, 'status': status}

 

    
        

    