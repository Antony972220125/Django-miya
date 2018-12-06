from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    tel = models.CharField(max_length=20)
    token = models.CharField(max_length=256, default='')