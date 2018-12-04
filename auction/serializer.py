from django.forms import widgets
from rest_framework import serializers
from auction.models import auction, bid

class AuctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = auction
        fields = '__all__'

class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = bid
        fields = '__all__'