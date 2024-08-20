from django.contrib import admin
from .models import GameRecord , Review

class GameRecordAdmin(admin.ModelAdmin):
    list_display = ('user', 'game_type', 'score', 'finished_at')
    list_filter = ('game_type', 'finished_at')
    search_fields = ('user__username', 'game_type')
    ordering = ('-finished_at',)
    
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'featured', 'created_at')
    list_filter = ('featured', 'created_at')
    search_fields = ('user__username', 'content')

