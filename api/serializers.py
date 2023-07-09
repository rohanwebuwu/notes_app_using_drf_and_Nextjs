from rest_framework.serializers import ModelSerializer
from .models import notes
class noteserializer(ModelSerializer):
    class Meta:
        model=notes
        fields="__all__"
        


