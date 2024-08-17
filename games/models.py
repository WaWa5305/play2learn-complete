from django.db import models
from django.contrib.auth.models import User

class Game(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game_type = models.CharField(max_length=100)
    game_settings = models.JSONField()
    score = models.IntegerField()
    finished_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.game_type} - {self.score}"