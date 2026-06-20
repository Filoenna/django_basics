from rest_framework import viewsets
from .models import Part
from .serializers import TechnicalSpecificationSerializer, EngineerSerializer, PartReadSerializer, PartWriteSerializer
from .models import TechnicalSpecification, Engineer


class PartViewSet(viewsets.ModelViewSet):

    queryset = Part.objects.select_related('specification').prefetch_related('assigned_engineers').all()

    def get_serializer_class(self):
        # Jeśli akcja to 'create' (POST) lub 'update' (PUT/PATCH), użyj płaskiego serializera
        if self.action in ['create', 'update', 'partial_update']:
            return PartWriteSerializer
        
        # Dla GET (list, retrieve) użyj ładnego, zagnieżdżonego serializera
        return PartReadSerializer

class TechnicalSpecificationViewSet(viewsets.ModelViewSet):
    queryset = TechnicalSpecification.objects.all()
    serializer_class = TechnicalSpecificationSerializer


class EngineerViewSet(viewsets.ModelViewSet):
    queryset = Engineer.objects.all()
    serializer_class = EngineerSerializer