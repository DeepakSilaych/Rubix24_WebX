from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
from User.serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .decorator import token_req
from django.shortcuts import get_object_or_404
from datetime import date
from rest_framework.authentication import TokenAuthentication

# Create your views here.

# APIs:
#DASHOBOARD
# currently subscirbed otts list
@token_req
def currentsubscriptions(request):
    subs = OTTSubscription.objects.filter(user=request.user)
    serializer = OTTSubscriptionSerializer(subs, many=True)
    return Response(serializer.data)

# past subscribed otts list
def PastSubscriptions(request):
    subs = OTTSubscription.objects.filter(user=request.user, subscirbed_till__lt=datetime.now().date())
    serializer = OTTSubscriptionSerializer(subs, many=True)
    return Response(serializer.data)

# recommended otts
def RecommendedOTTs(request):
    pass

# friends : name and their subscribed otts
def sharewithfriends(request):
    pass

#OTT:

class OTTlist(APIView):
    # all otts list
    def get(self, request):
        ott = OTT.objects.all()
        serializer = OTTSerializer(ott, many=True)
        return Response(serializer.data)

class OTTdetail(APIView):
    # particular ott details
    def get(self, request, OTT_id):
        ott = get_object_or_404(OTT, id=OTT_id)
        serializer = OTTSerializer(ott)
        return Response(serializer.data)
    
class OTTSubscriptionlist(APIView):
    # all otts subscribed by user
    def get(self, request):
        ott = OTTSubscription.objects.filter(user=request.user)
        serializer = OTTSubscriptionSerializer(ott, many=True)
        return Response(serializer.data)
    
class OTTSubscriptiondetail(APIView):
    # particular ott details
    def get(self, request, OTT_id):
        ott = get_object_or_404(OTTSubscription, id=OTT_id)
        serializer = OTTSubscriptionSerializer(ott)
        return Response(serializer.data)
    
    # add ott subscirption
    def post(self, request, OTT_id):
        serializer = OTTSubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    # update ott subscription
    def put(self, request, OTT_id):
        ott = get_object_or_404(OTTSubscription, id=OTT_id)
        serializer = OTTSubscriptionSerializer(ott, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    def patch(self, request, OTT_id):
        ott = get_object_or_404(OTTSubscription, id=OTT_id)
        serializer = OTTSubscriptionSerializer(ott, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    # remove ott subscription
    def delete(self, request, OTT_id):
        ott = get_object_or_404(OTTSubscription, id=OTT_id)
        ott.delete()
        return Response(status=204) 

class Reviewlist(APIView):
    # all reviews of particular ott
    def get(self, request, OTT_id):
        ott = get_object_or_404(OTT, id=OTT_id)
        review = review.objects.filter(ott=ott)
        serializer = ReviewSerializer(review, many=True)
        return Response(serializer.data)
# add review(only once)
# show all reviews of particular ott


# FRIENDS 

class Friendslist(APIView):
    # all friends list
    def get(self, request):
        friends = User.objects.filter(is_staff=False)
        serializer = CustomUserSerializer(friends, many=True)
        return Response(serializer.data)

class Friendsdetail(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        http_method_names = ['post']
        userid = request.data['userid']
        friend = get_object_or_404(User, id=userid)
        current_user = request.user
        current_user.friends.add(friend)
        current_user.save()
        return Response(status=200, data={'message': 'Friend added successfully'})
# add friend
# remove friend
# list of friends
# list of friends subscribed otts

# USER:
 # profile details
    #update profile(add image,etc)

# OPTIMIZE PAGE:
# recommend otts
# cost optimizing options
# friends having same ott subscription-- you can share with them
