from django.urls import path
from .views import AllCustomers, SelectedCustomer

urlpatterns = [
    path('', AllCustomers.as_view(), name='all_customers'),
    path('<int:id>/', SelectedCustomer.as_view(), name='selected_customer'),
]