# import to read and return JSON data more efficiently
from rest_framework.views import APIView, Response
from .models import Customer

# serializer to turn our QuerySets into binary string
from django.core.serializers import serialize

# json.loads will turn binary strings into JSON data
import json

class AllCustomers(APIView):
    def get(self, request):
        # order our data by name in aphabetical order
        customers = Customer.objects.order_by("first_name")
        # utilize Django's built in serialize function to turn our query set into a binary string
        serialized_customers = serialize("json", customers)
        # use the python json.loads function to turn our binary string into a workable json format
        json_customers = json.loads(serialized_customers)
        return Response(json_customers)
    
    def post(self, request):
        new_customer = Customer.objects.create(**request.data)
        new_customer.save()
        new_customer.full_clean()
        new_customer = json.loads(serialize('json', [new_customer]))
        return Response(new_customer)
    
class SelectedCustomer(APIView):
    def get(self, request, id):
        customer = Customer.objects.get(id=id)
        json_customer = serialize("json", [customer])
        serialized_customer = json.loads(json_customer)[0]
        return Response(serialized_customer)
    
    def put(self, request, id):
        customer = Customer.objects.get(id=id)
        customer.update(request.data['first_name'], request.data['last_name'], request.data['email'], request.data['phone'], request.data['address'])
        # full clean to check our validations
        customer.full_clean()
        # save all changes
        customer.save()
        # serialize our updated customer and return it as json
        customer = json.loads(serialize('json', [customer]))
        return Response(customer)
    
    def delete(self, request, id):
        # get a customer from our database
        customer = Customer.objects.get(id=id)
        # grab the customer name before deleting to utilize in the Response message
        customer_name = customer.first_name
        # delete instance and database entry
        customer.delete()
        # return the name of the customer deleted
        return Response(f"{customer_name} was deleted.")