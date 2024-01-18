from django.urls import path
from .views import *

urlpatterns = [
    path('current_subscriptions/', currentsubscriptions, name='current_subscriptions'),
    path('past_subscriptions/', PastSubscriptions, name='past_subscriptions'),
    path('recommended_otts/', RecommendedOTTs, name='recommended_otts'),
    path('share_with_friends/', sharewithfriends, name='share_with_friends'),

    path('ott_list/', OTTlist.as_view(), name='ott_list'),
    path('ott_detail/<int:OTT_id>/', OTTdetail.as_view(), name='ott_detail'),

    path('ott_subscription_list/', OTTSubscriptionlist.as_view(), name='ott_subscription_list'),
    path('ott_subscription_detail/<int:OTT_id>/', OTTSubscriptiondetail.as_view(), name='ott_subscription_detail'),

    path('review_list/', Reviewlist.as_view(), name='review_list'),

    path('friend_list/', Friendslist.as_view(), name='friend_list'),
    path('friend_detail/', Friendsdetail.as_view(), name='friend_detail'),
]
