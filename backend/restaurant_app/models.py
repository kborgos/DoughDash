from django.db import models

# Create your models here.

class Restaurant(models.Model):
    name = models.CharField()
    address = models.CharField()

    def __str__(self):
        return f"{self.name}"

class MenuItem(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    name = models.CharField()
    description = models.CharField()
    price = models.DecimalField(max_digits=6, decimal_places=2, default=1.00)
    category = models.CharField(default='Bread')

    def __str__(self):
        return f"{self.name} | {self.restaurant}"

class RestaurantOrder(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, default=1)
    menu_item = models.ManyToManyField(MenuItem)

    def __str__(self):
        return f"Restaurant order #{str(self.pk)}"