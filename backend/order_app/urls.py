from django.urls import path
from .views import AllOrders, SelectedOrder

urlpatterns = [
    path('', AllOrders.as_view(), name='all_orders'),
    path('<int:id>/', SelectedOrder.as_view(), name='selected_order'),
]