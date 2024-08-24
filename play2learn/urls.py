"""
URL configuration for play2learn project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views
from .views import leaderboard_view
from django.contrib.auth import views as auth_views
from .views import logout_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('contact/', views.contact_us, name='contact_us'),
    path('my_account/', views.my_account, name='my_account'),
    path('contact_thanks/', views.contact_thanks, name='contact_thanks'),
    path('leaderboard/', leaderboard_view, name='leaderboard'),
    path('games/', include('games.urls')),
    path('reviews/', views.reviews, name='reviews'),
    path('submit_review/', views.reviews, name='submit_review'),
    
]
