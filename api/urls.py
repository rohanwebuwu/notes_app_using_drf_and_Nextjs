from django.urls import path
from . import views
urlpatterns = [
    path('',views.getroutes),
   path('notes',views.getnotes),
   path('notes/create',views.createnote),
   path('notes/<str:pk>/update',views.updatenote ),
   path('notes/<str:pk>/delete',views.deletenote ),
   path('notes/<str:pk>/',views.getnote ),
]

