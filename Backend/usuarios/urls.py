from django.urls import include, path
from rest_framework import routers
from .views import UsuarioViewSet

router = routers.DefaultRouter()
router.register(r'usuarios', UsuarioViewSet, 'usuarios')

urlpatterns = [
    path('api/', include(router.urls))
]
