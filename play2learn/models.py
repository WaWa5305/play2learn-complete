from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth import get_user_model
from games.models import Game

class GameTracking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='play2learn_game_trackings')
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    time_finished = models.DateTimeField(default=timezone.now)
    game_type = models.CharField(max_length=255)
    game_settings = models.JSONField()
    final_score = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.game.name} - {self.final_score}"

class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='play2learn_review')
    content = models.TextField()
    featured = models.BooleanField(default=False)
    rating = models.PositiveIntegerField(default=1)  
    is_featured = models.BooleanField(default=False)  
    review_text = models.TextField(blank=True)  
    title = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Review by {self.user.username} - Featured: {self.featured}"
    
class ContactFormMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"
    
    
User = get_user_model()  

class LeaderboardRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.CharField(max_length=100)  
    total_score = models.IntegerField()

    class Meta:
        ordering = ['-total_score']
    
    def __str__(self):
        return f'{self.user.username} - {self.total_score}'