from django.db import models
from restaurant_app.models import RestaurantOrder
from customer_app.models import Customer
from driver_app.models import Driver

# Create your models here.
class Order(models.Model):
    date = models.DateField(auto_now_add=True)
    restaurant_order = models.OneToOneField(RestaurantOrder, on_delete=models.CASCADE)
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE)
    # assigned_driver = models.OneToOneField(Driver, on_delete=models.CASCADE)

    def __str__(self):
        return f"Order #{str(self.pk)}"