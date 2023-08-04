from django.db import models
from django.utils.timezone import now


class Item(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    company = models.CharField(max_length=200)
    salary = models.FloatField()
    applied = models.IntegerField(default=0)
    created_date = models.DateField()

    def __str__(self):
        return self.name
