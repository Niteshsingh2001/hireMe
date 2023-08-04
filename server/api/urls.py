# api/urls.py
from django.urls import path
from .views import getItems, getSearch

urlpatterns = [
    path('items', getItems, name='item_list'),
    path('search/<str:query>', getSearch, name='search_item_list'),
]
