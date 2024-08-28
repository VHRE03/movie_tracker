from rest_framework import serializers
from .models import Pelicula

class PeliculaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pelicula
        fields = '__all__'