# Generated by Django 5.0.6 on 2024-06-09 22:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_app', '0007_remove_restaurantorder_restaurant'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurantorder',
            name='restaurant',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='restaurant_app.restaurant'),
        ),
    ]