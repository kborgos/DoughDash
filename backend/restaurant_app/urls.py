from django.urls import path
from .views import AllRestaurants, SelectedRestaurant, SelectedMenuItem

urlpatterns = [
    path('', AllRestaurants.as_view(), name='all_restaurants'),
    path('<int:id>/', SelectedRestaurant.as_view(), name='selected_restaurant'),
    path('menuitems/<int:id>/', SelectedMenuItem.as_view(), name='selected_menu_item'),
]