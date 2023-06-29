class Comentario:
    def __init__(self, pelicula, autor, mensaje):
        self.pelicula = pelicula
        self.autor = autor
        self.mensaje = mensaje
        
    def toDict(self):
        return {
            'pelicula': self.pelicula,
            'autor':self.autor,
            'mensaje':self.mensaje
        }
        

