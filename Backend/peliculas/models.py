from django.db import models
from usuarios.models import Usuario

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
    
    def __str__(self):
        return self.titulo