from django.contrib import admin
from .models import GameTracking, Review, ContactFormMessage, LeaderboardRecord

@admin.register(GameTracking)
class GameTrackingAdmin(admin.ModelAdmin):
    list_display = ('user', 'game', 'time_finished', 'game_type', 'final_score')
    list_filter = ('game_type', 'time_finished')
    search_fields = ('user__username', 'game__name')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'title', 'featured', 'rating', 'created_at')
    list_filter = ('featured', 'rating')
    search_fields = ('user__username', 'title', 'content')

@admin.register(ContactFormMessage)
class ContactFormMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'sent_at')
    search_fields = ('name', 'email', 'message')

@admin.register(LeaderboardRecord)
class LeaderboardRecordAdmin(admin.ModelAdmin):
    list_display = ('user', 'game', 'total_score')
    list_filter = ('game',)
    search_fields = ('user__username', 'game')
