from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import notes
from .serializers import noteserializer
# Create your views here.


@api_view(['GET'])
def getroutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def getnotes(request):
    nootes = notes.objects.all()
    serializer = noteserializer(nootes, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
def deletenote(request, pk):
    nootes = notes.objects.get(id=pk)
    nootes.delete()
    return Response('Note was deleted!')


@api_view(['GET'])
def getnote(request, pk):
    nootes = notes.objects.get(id=pk)
    serializer = noteserializer(nootes, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updatenote(request, pk):
    data = request.data
    nootes = notes.objects.get(id=pk)
    serializer = noteserializer(instance=nootes, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def createnote(request):
    data = request.data
    nootes = notes.objects.create(
        body=data['body']
    )

    serializer = noteserializer(nootes, many=False)
    return Response(serializer.data)
