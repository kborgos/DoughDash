# Generated by Django 5.0.6 on 2024-06-08 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_app', '0004_menuitem_category_menuitem_price'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurantorder',
            name='restaurant',
        ),
    ]
