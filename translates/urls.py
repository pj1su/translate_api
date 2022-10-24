from django.urls import path
from . import views

app_name = "translate"

urlpatterns = [
    path("", views.TranslateView.as_view(), name="home"),
    path("translate", views.TranslateAPIView.as_view(), name="translate"),
    path("api", views.trans, name="api"),
]
