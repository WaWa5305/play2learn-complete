{% load static %}
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{% block title %}Play2Learn{% endblock %}</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<link href="{% static 'css/styles.css' %}" rel="stylesheet">
<script defer src="http://localhost:8080/js/chunk-vendors.js"></script><script defer src="http://localhost:8080/js/app.js"></script>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="{% url 'home' %}">Play2Learn</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="{% url 'games:math-facts' %}">Games</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{% url 'leaderboard' %}">Leaderboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{% url 'reviews' %}">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{% url 'contact_us' %}">Contact Us</a>
        </li>
        {% if user.is_authenticated %}
        <li class="nav-item">
          <a class="nav-link" href="{% url 'my_account' %}">My Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{% url 'logout' %}">Logout</a>
        </li>
        {% else %}
        <li class="nav-item">
          <a class="nav-link" href="{% url 'login' %}">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{% url 'register' %}">Register</a>
        </li>
        {% endif %}
      </ul>
    </div>
  </nav>
  {% block main %}
  <main class="container mt-4">
  </main>
  {% endblock %}

  <div id="reviewCarousel" class="carousel slide mt-4">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="d-block w-100">
          <p class="lead">"Great site for learning!" - User A</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-block w-100">
          <p class="lead">"Fun and educational games!" - User B</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#reviewCarousel" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#reviewCarousel" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>


