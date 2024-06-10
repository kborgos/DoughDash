# import to read and return JSON data more efficiently
from rest_framework.views import APIView, Response
from .models import Driver

# serializer to turn our QuerySets into binary string
from django.core.serializers import serialize

# json.loads will turn binary strings into JSON data
import json

class AllDrivers(APIView):
    def get(self, request):
        # order our data by name in aphabetical order
        drivers = Driver.objects.order_by("first_name")
        # utilize Django's built in serialize function to turn our query set into a binary string
        serialized_drivers = serialize("json", drivers)
        # use the python json.loads function to turn our binary string into a workable json format
        json_drivers = json.loads(serialized_drivers)
        return Response(json_drivers)
    
    def post(self, request):
        new_driver = Driver.objects.create(**request.data)
        new_driver.save()
        new_driver.full_clean()
        new_driver = json.loads(serialize('json', [new_driver]))
        return Response(new_driver)
    
class SelectedDriver(APIView):
    def get(self, request, id):
        driver = Driver.objects.get(id=id)
        json_driver = serialize("json", [driver])
        serialized_driver = json.loads(json_driver)[0]
        return Response(serialized_driver)
    
    def put(self, request, id):
        driver = Driver.objects.get(id=id)
        driver.update(request.data['first_name'], request.data['last_name'], request.data['email'], request.data['phone'], request.data['address'])
        # full clean to check our validations
        driver.full_clean()
        # save all changes
        driver.save()
        # serialize our updated driver and return it as json
        driver = json.loads(serialize('json', [driver]))
        return Response(driver)
    
    def delete(self, request, id):
        # get a driver from our database
        driver = Driver.objects.get(id=id)
        # grab the driver name before deleting to utilize in the Response message
        driver_name = driver.first_name
        # delete instance and database entry
        driver.delete()
        # return the name of the customer deleted
        return Response(f"{driver_name} was deleted.")