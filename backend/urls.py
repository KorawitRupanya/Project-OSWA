from django.urls import path
from . import views
urlpatterns = [
    path('api/backend/', views.BackendListCreate.as_view() ),
]
