from django.db import models
class Admin(models.Model):
    productName = models.CharField(max_length=100)
    details = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=False)
    prices = models.CharField(max_length=10)
