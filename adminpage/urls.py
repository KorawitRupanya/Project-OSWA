from django.urls import path
from . import views

urlpatterns = [
    path('adminpage/', views.postAuctionCard),
    path('adminpage/check/', views.requestAuctionCard),

]
