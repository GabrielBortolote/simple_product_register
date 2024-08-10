from django.db import models

class Product(models.Model):
  name = models.CharField(max_length=33)
  value = models.FloatField()
  description = models.TextField(max_length=500)