from django.conf import settings
from django.db import models

class Game(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    game_type = models.CharField(max_length=100)
    game_settings = models.JSONField()
    score = models.IntegerField()
    finished_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.game_type} - {self.score}"
    
class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='games_reviews')
    content = models.TextField()
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Review by {self.user.username} - Featured: {self.featured}"
    
class GameRecord(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    game_type = models.CharField(max_length=100)  
    game_settings = models.JSONField()  
    score = models.IntegerField()  
    finished_at = models.DateTimeField(auto_now_add=True)  

    class Meta:
        ordering = ['-finished_at']  

    def __str__(self):
        return f"{self.user.username} - {self.game_type} - {self.score}"
