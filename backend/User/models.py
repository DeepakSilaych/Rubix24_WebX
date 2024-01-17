from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, null = True, blank = True)
    password = models.CharField(max_length=50, null = True, blank = True)
    
    created_at = models.DateTimeField(auto_now_add=True, null = False, blank = False)

    def __str__(self):
        return self.name