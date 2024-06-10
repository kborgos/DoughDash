from django.urls import path
from .views import AllDrivers, SelectedDriver

urlpatterns = [
    path('', AllDrivers.as_view(), name='all_drivers'),
    path('<int:id>/', SelectedDriver.as_view(), name='selected_driver'),
]