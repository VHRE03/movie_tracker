from django.db import models

# Create your models here.
class PeliculasModel(models.Model):
    titulo = models.CharField(max_length = 200)
    director = models.CharField(max_length = 100)
    anio_lanzamineto = models.IntegerField(max_length = 4)
    genero = models.CharField(max_length = 50)
    duracion = models.IntegerField(max_length = 3)
    sinopsis = models.TextField()
    poster = models.CharField(max_length = 255)
    