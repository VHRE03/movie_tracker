from django.db import models
from usuarios.models import Usuario
import os

# Create your models here.
class Pelicula(models.Model):
    titulo = models.CharField(max_length = 200)
    director = models.CharField(max_length = 100)
    anio_lanzamineto = models.IntegerField()
    genero = models.CharField(max_length = 50)
    duracion = models.IntegerField()
    sinopsis = models.TextField()
    poster = models.ImageField(upload_to = 'images/')
    usuario = models.ForeignKey(Usuario, on_delete = models.CASCADE, related_name = 'peliculas')
    
    def delete(self, *args, **kwargs):
        if self.poster:
            if os.path.isfile(self.poster.path):
                os.remove(self.poster.path)
        super().delete(*args, **kwargs)       
    
    def __str__(self):
        return self.titulo