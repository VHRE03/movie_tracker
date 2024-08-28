from rest_framework import viewsets
from .models import Pelicula
from .serializer import PeliculaSerializer

# Create your views here.
class PeliculaViewSet(viewsets.ModelViewSet):
    queryset = Pelicula.objects.all()
    serializer_class = PeliculaSerializer
