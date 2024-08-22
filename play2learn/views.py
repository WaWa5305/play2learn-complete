from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import GameTracking, Review, LeaderboardRecord, ContactFormMessage
from .forms import ContactForm
from .forms import Review
from .forms import ReviewForm


def home(request):
    featured_reviews = Review.objects.filter(is_featured=True)
    math_facts_leaderboard = LeaderboardRecord.objects.filter(game='math_facts').order_by('-total_score')
    anagrams_hunts_leaderboard = LeaderboardRecord.objects.filter(game='anagrams_hunts').order_by('-total_score')
    
    context = {
        'featured_reviews': featured_reviews,
        'math_facts_leaderboard': math_facts_leaderboard,
        'anagrams_hunts_leaderboard': anagrams_hunts_leaderboard
    }
    return render(request, 'home.html', context)

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('my_account')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('my_account')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def logout(request):
    auth_logout(request)
    return redirect('login')

def contact_us(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            ContactFormMessage.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                message=form.cleaned_data['message']
            )
            return redirect('contact_thanks')
    else:
        form = ContactForm()
    return render(request, 'contact_us.html', {'form': form})

def my_account(request):
    return render(request, 'my_account.html')

def contact_thanks(request):
    return render(request, 'contact_thanks.html')

def leaderboard_view(request):
    records = LeaderboardRecord.objects.all()
    return render(request, 'leaderboard.html', {'leaderboard_records': records})

def reviews(request):
    reviews = Review.objects.all()
    if request.method == 'POST':
        if request.user.is_authenticated:
            form = ReviewForm(request.POST)
            if form.is_valid():
                review = form.save(commit=False)
                review.user = request.user
                review.save()
                return redirect('reviews')
        else:
            return redirect('login')
    else:
        form = ReviewForm()

    return render(request, 'reviews.html', {
        'reviews': reviews,
        'review_form': form
    })
    
    
    