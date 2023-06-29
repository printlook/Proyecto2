class Pelicula:
    def __init__(self, nombre, genero, clasificacion, anio, duracion, link):
        self.nombre = nombre
        self.genero = genero
        self.clasificacion = clasificacion
        self.anio = anio
        self.duracion = duracion
        self.link = link
        
    def toDict(self):
        return {
            'nombre':self.nombre,
            'genero':self.genero,
            'clasificacion': self.clasificacion,
            'anio': self.anio,
            'duracion': self.duracion,
            'link': self.link
        }
        

