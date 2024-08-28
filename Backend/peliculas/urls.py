from django.urls import path, include
from rest_framework import routers
from peliculas import views

router = routers.DefaultRouter()
router.register(r'peliculas', views.PeliculaViewSet, 'peliculas')

urlpatterns = [
    path("api/", include(router.urls))
]
