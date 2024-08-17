from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Game
from .models import Game
from .forms import GameForm
from django.views.generic import TemplateView

@login_required
def track_game(request):
    if request.method == 'POST':
        form = GameForm(request.POST)
        if form.is_valid():
            game = form.save(commit=False)
            game.user = request.user  
            game.save()  
            return redirect('leaderboard')  
    else:
        form = GameForm()
    return render(request, 'games/track_game.html', {'form': form})
    

@login_required
def leaderboard(request):
    games = Game.objects.all().order_by('-score')
    return render(request, 'games/leaderboard.html', {'games': games})

class MathFactsView(TemplateView):
    template_name = "math-facts.html"

class AnagramHuntView(TemplateView):
    template_name = "anagram-hunt.html"