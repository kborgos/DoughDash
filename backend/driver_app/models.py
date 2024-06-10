from django.db import models

# Create your models here.
class Driver(models.Model):
    first_name = models.CharField()
    last_name = models.CharField()
    email = models.EmailField()
    phone = models.CharField()
    address = models.CharField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
    def update(self, first_name, last_name, email, phone, address):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.phone = phone
        self.address = address