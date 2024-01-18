from rest_framework import serializers
from .models import *

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = review
        fields = ['rating', 'text', 'created_at']

class OTTSerializer(serializers.ModelSerializer):
    review = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = OTT
        fields = ['name', 'description', 'ott_type', 'review', 'rating']

class OTTSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = OTTSubscription
        fields = ['ott', 'subscribed', 'subscribed_at', 'duration', 'cost', 'shared', 'shared_with']