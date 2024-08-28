from django.urls import path, include
from rest_framework import routers
from .views import PeliculaViewSet

router = routers.DefaultRouter()
router.register(r'peliculas', PeliculaViewSet, 'peliculas')

urlpatterns = [
    path('api/', include(router.urls))
]
