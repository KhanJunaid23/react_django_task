from dataclasses import field
from importlib.metadata import requires
from pyexpat import model
from unicodedata import category
from unittest.util import _MAX_LENGTH
from urllib import request
from rest_framework import serializers
# from ..category.serializers import CategorySerializer
from ..category.serializers import *
from .models import Product

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    image=serializers.ImageField(
        max_length=None, allow_empty_file=False, allow_null=True, required=False
    )

    class Meta:
        model=Product
        fields=('id','title','description','price','image','category_id')