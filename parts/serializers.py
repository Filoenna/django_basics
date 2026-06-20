from rest_framework import serializers
from .models import Engineer, Part, TechnicalSpecification

class PartShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = ['id', 'name', 'serial_number', 'specification']

class TechnicalSpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnicalSpecification
        fields = ['id', 'certification_code', 'max_temperature_celsius', 'last_calibrated']

class EngineerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Engineer
        fields = ['id', 'first_name', 'last_name', 'license_number']


# class PartWithRelationsSerializer(serializers.ModelSerializer):
#     specification = TechnicalSpecificationSerializer(read_only=True)
#     # many=True mówi Django: "Tam jest relacja do wielu obiektów, zapakuj je w listę []"
#     assigned_engineers = EngineerSerializer(many=True, read_only=True)

#     class Meta:
#         model = Part
#         fields = ['id', 'name', 'serial_number', 'specification', 'assigned_engineers']

class PartWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = ['id', 'name', 'serial_number', 'specification', 'assigned_engineers']

class PartReadSerializer(serializers.ModelSerializer):
    specification = TechnicalSpecificationSerializer(read_only=True)
    assigned_engineers = EngineerSerializer(many=True, read_only=True)

    class Meta:
        model = Part
        fields = ['id', 'name', 'serial_number', 'specification', 'assigned_engineers']