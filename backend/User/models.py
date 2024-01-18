from django.db import models
from datetime import datetime
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from OTTsubcription.models import *

class UserManager(BaseUserManager):
    def create_user(self, username, email, password, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=self.normalize_email(email), created=datetime.now())
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password):
        if not email:
            raise ValueError('The Email field must be set')
        if not password:
            raise ValueError('The Password field must be set')
        if not email:
            raise ValueError('The Email field must be set')
        
        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user
    
    def authenticate(self, request, username, password):
        try:
            user = User.objects.get(email=username)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None
        
    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None

class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=50, blank = False, null = False)
    username = models.CharField(max_length=70, unique= True, null = True, blank = False)
    email = models.CharField(max_length=50, unique = True, null = True, blank = True)
    created = models.DateTimeField(auto_now_add=True, null = False, blank = False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    friends = models.ManyToManyField('self', blank=True, symmetrical=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.name