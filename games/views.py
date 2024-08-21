from django.shortcuts import render 
from django.contrib.auth.decorators import login_required
from .models import Game, Review
from .forms import GameForm, ReviewForm, ContactForm
from django.views.generic import TemplateView, ListView, CreateView, DetailView 

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
    
class ReviewListView(ListView):
    model = Review
    template_name = 'games/review_list.html'
    context_object_name = 'reviews'
    
class ReviewCreateView(CreateView):
    model = Review
    form_class = ReviewForm
    template_name = 'games/review_form.html'
    success_url = '/games/reviews/'
    
    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)
    
class ContactUsView(TemplateView):
    template_name = 'games/contact_us.html'

    def get(self, request):
        form = ContactForm()
        return self.render_to_response({'form': form})

    def post(self, request):
        form = ContactForm(request.POST)
        if form.is_valid():
            return redirect('games:contact_us')
        return self.render_to_response({'form': form})
            
class UserAccountView(TemplateView):
    template_name = 'games/user_account.html'
    
class GameListView(ListView):
    model = Game
    template_name = 'games/game_list.html'
    
class GameDetailView(DetailView):
    model = Game
    template_name = 'games/game_detail.html'
    


