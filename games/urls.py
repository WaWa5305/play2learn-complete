from django.urls import path
from games.views import (MathFactsView, AnagramHuntView,GameListView,
    ReviewListView,ReviewCreateView,ContactUsView, GameDetailView,
    UserAccountView
)

app_name = 'games'

urlpatterns = [
    path('math-facts/', MathFactsView.as_view(), name='math-facts'),
    path('anagram-hunt/', AnagramHuntView.as_view(), name='anagram-hunt'),
    path('leaderboard/', GameListView.as_view(), name='leaderboard'),
    path('reviews/', ReviewListView.as_view(), name='reviews'),
    path('reviews/new/', ReviewCreateView.as_view(), name='review-create'),
    path('contact/', ContactUsView.as_view(), name='contact_us'),
    path('', GameListView.as_view(), name='game_list'),
    path('game/<int:pk>/', GameDetailView.as_view(), name='game_detail'),
    path('my-account/', UserAccountView.as_view(), name='my_account'),
]
