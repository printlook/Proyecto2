class Usuario:
    def __init__(self,nombre,apellido,nombre_usuario,contrasenia,tipo):
        self.nombre = nombre
        self.apellido = apellido
        self.nombre_usuario = nombre_usuario
        self.contrasenia = contrasenia
        self.tipo = tipo

    def toDict(self):
        return {
            'nombre':self.nombre,
            'apellido':self.apellido,
            'nombre_usuario': self.nombre_usuario,
            'contrasenia': self.contrasenia,
            'tipo': self.tipo
        }