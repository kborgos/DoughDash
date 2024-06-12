from rest_framework import serializers
from .models import Restaurant, MenuItem

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ('name', 'description', 'price', 'category')

class RestaurantSerializer(serializers.ModelSerializer):
    # car_model_id = MenuItemSerializer(read_only=True)

    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'address')