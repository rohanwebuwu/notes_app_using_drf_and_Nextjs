from django.db import models

# Create your models here.
class notes(models.Model):
    body=models.TextField(null=True,blank=True)
    updated=models.DateField(auto_now=True)
    created=models.DateField(auto_now_add=True)

def __str__(self):
    return self.body[0:50]
