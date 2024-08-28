from django.db import models

# Create your models here.
class Pelicula(models.Model):
    titulo = models.CharField(max_length = 200)
    director = models.CharField(max_length = 100)
    anio_lanzamineto = models.IntegerField()
    genero = models.CharField(max_length = 50)
    duracion = models.IntegerField()
    sinopsis = models.TextField()
    poster = models.CharField(max_length = 255) 
    
    def __str__(self):
        return self.titulo