from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombre_usuario = models.CharField(max_length = 50)
    correo_electronico = models.CharField(max_length = 100)
    contrasenia = models.CharField(max_length = 255)
    
    def __str__(self):
        return self.nombre_usuario