from django.urls import path
from . import views

urlpatterns = [
    path('adminpage/', views.index),
    path('postAuctionCard/', views.postAuctionCard),
]
