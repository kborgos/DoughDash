# import to read and return JSON data more efficiently
from rest_framework.views import APIView, Response
from .models import Order

# serializer to turn our QuerySets into binary string
from django.core.serializers import serialize

# json.loads will turn binary strings into JSON data
import json

class AllOrders(APIView):
    def get(self, request):
        # order our data by name in aphabetical order
        orders = Order.objects.order_by("date")
        # utilize Django's built in serialize function to turn our query set into a binary string
        serialized_orders = serialize("json", orders)
        # use the python json.loads function to turn our binary string into a workable json format
        json_orders = json.loads(serialized_orders)
        return Response(json_orders)
    
    def post(self, request):
        new_order = Order.objects.create(**request.data)
        new_order.save()
        new_order.full_clean()
        new_order = json.loads(serialize('json', [new_order]))
        return Response(new_order)
    
class SelectedOrder(APIView):
    def get(self, request, id):
        order = Order.objects.get(id=id)
        json_order = serialize("json", [order])
        serialized_order = json.loads(json_order)[0]
        return Response(serialized_order)
    
    def delete(self, request, id):
        order = Order.objects.get(id=id)
        order_number = order.pk
        order.delete()
        return Response(f"Order {order_number} was deleted.")