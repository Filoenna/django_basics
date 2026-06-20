from django.urls import path, include
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PartViewSet, TechnicalSpecificationViewSet, EngineerViewSet

router = DefaultRouter()

router.register(r'parts', PartViewSet, basename='part')
router.register(r'specifications', TechnicalSpecificationViewSet, basename='technical-specification')
router.register(r'engineers', EngineerViewSet, basename='engineer')

urlpatterns = [
    path('', include(router.urls)),
]