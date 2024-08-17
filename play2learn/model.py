from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Game(models.Model):
    name = models.CharField(max_length=255)

class GameTracking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    time_finished = models.DateTimeField(default=timezone.now)
    game_type = models.CharField(max_length=255)
    game_settings = models.JSONField()
    final_score = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.game.name} - {self.final_score}"

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review_text = models.TextField()
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} Review"

class ContactFormMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"