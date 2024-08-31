from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from .views import PeliculaViewSet

router = routers.DefaultRouter()
router.register(r'peliculas', PeliculaViewSet, 'peliculas')

urlpatterns = [
    path('api/', include(router.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
