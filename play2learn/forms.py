from django import forms
from .models import Review, ContactFormMessage 

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['content']

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactFormMessage
        fields = ['name', 'email', 'message']
        
class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['title', 'review_text', 'rating', 'is_featured']   
        widgets = {
            'review_text': forms.Textarea(attrs={'rows': 4}),
            'rating': forms.NumberInput(attrs={'min': 1, 'max': 5}),
        }