from functools import wraps
from django.http import JsonResponse
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework import status

def token_req(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        authorization_header = request.headers.get('Authorization', '')
        if not authorization_header.startswith('Bearer '):
            return JsonResponse({'detail': 'Authorization header is missing or invalid'}, status=status.HTTP_401_UNAUTHORIZED)

        token = authorization_header.split(' ')[1]

        try:
            access_token = AccessToken(token)
            user = access_token.payload.get('user_id')
            request.user = user
        except Exception as e:
            return JsonResponse({'detail': 'Invalid token'}, status=status.HTTP_401_UNAUTHORIZED)

        return view_func(request, *args, **kwargs)

    return wrapper
