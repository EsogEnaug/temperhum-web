from django.db import models
#from datetime import datetime
from django.utils import timezone

# Create your models here.
class Temperature(models.Model):
    data = models.FloatField()
    dt = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return "temp: {}, time: {}".format(self.data, self.dt)

class Humidity(models.Model):
    data = models.FloatField()
    dt = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return "humidity: {}, time: {}".format(self.data, self.dt)

class DewPoint(models.Model):
    " точка россы"
    data = models.FloatField()
    dt = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return "dewpoint: {}, time: {}".format(self.data, self.dt)
