from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import Review
from .models import Game

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['content']
        
class GameForm(forms.ModelForm):
    class Meta:
        model = Game
        fields = ['game_type', 'game_settings', 'score'] 
        exclude = ['user', 'finished_at']