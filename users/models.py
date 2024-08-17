from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
        
    def __str__(self):
        return self.user.username

class CustomUser(AbstractUser):
    
    def __str__(self):
        return self.username
    
