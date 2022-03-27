from distutils.command.upload import upload
from email.mime import image
from turtle import title
from unicodedata import category, name
from django.db import models
from api.category.models import Category

# Create your models here.

class Product(models.Model):
    title=models.CharField(max_length=100)
    description=models.CharField(max_length=250)
    price=models.CharField(max_length=50)
    image=models.ImageField(upload_to='images/', blank=True, null=True)
    category=models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title