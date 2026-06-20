from django.db import models

# Create your models here.
class TechnicalSpecification(models.Model):
    certification_code = models.CharField(max_length=50, unique=True)
    max_temperature_celsius = models.IntegerField()
    last_calibrated = models.DateField()

    def __str__(self):
        return self.certification_code
    
class Engineer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    license_number = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class Part(models.Model):
    name = models.CharField(max_length=255)
    serial_number = models.CharField(max_length=100, unique=True)

    assigned_engineers = models.ManyToManyField(
        Engineer,
        related_name='assigned_parts',
    )

    specification = models.OneToOneField(
        TechnicalSpecification,
        on_delete=models.CASCADE,
        related_name='part',
    )

    def __str__(self):
        return f"{self.name} ({self.serial_number})"