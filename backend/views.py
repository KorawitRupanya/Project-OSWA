from backend.models import Backend
from backend.serializers import BackendSerializer
from rest_framework import generics

class BackendListCreate(generics.ListCreateAPIView):
    queryset = Backend.objects.all()
    serializer_class = BackendSerializer
