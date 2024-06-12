# import to read and return JSON data more efficiently
from rest_framework.views import APIView, Response
from .models import Restaurant, MenuItem, RestaurantOrder
from .serializers import RestaurantSerializer, MenuItemSerializer
from django.core.serializers import serialize
import json

# serializer to turn our QuerySets into binary string
from django.core.serializers import serialize

# json.loads will turn binary strings into JSON data
import json

class AllRestaurants(APIView):
    def get(self, request):
        restaurants = Restaurant.objects.order_by("name")
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)
    
class SelectedRestaurant(APIView):
    def get(self, request, id):
        restaurant = Restaurant.objects.get(id=id)
        # since restaurant is a single instance it needs to be wrapped by [] to make it
        # iterable for the serialize function to turn it into a binary string
        json_restaurant = serialize("json", [restaurant])
        serialized_restaurant = json.loads(json_restaurant)[0] # <--We don't want our Restaurant data in a lis
        # # grab a restaurant serialized orders
        # orders = json.loads(
        #     serialize(
        #         "json",
        #         RestaurantOrder.objects.filter(restaurant=id),
        #     )
        # )
        # serialized_restaurant["fields"]["orders"] = orders

        menu_items = MenuItem.objects.filter(restaurant=id)
        menu_items_serializer = MenuItemSerializer(menu_items, many=True)
        serialized_restaurant["fields"]["menu_items"] = menu_items_serializer.data
        

        return Response(serialized_restaurant)

class SelectedMenuItem(APIView):
    def get(self, request, id):
        menu_item = MenuItem.objects.get(id=id)
        json_menu_item = serialize("json", [menu_item])
        serialized_menu_item = json.loads(json_menu_item)[0]
        return Response(serialized_menu_item)