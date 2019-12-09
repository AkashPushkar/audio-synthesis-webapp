from django.shortcuts import render
import os
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage


# from utils import backend


import pdb

# Create your views here.



def index(request):

	images_name = os.listdir('micApp/static/micApp/images')
	context = {
		'images' : images_name
	}

	return render(request, 'micApp/home.html', context)

def about(request):
	return render(request, 'micApp/about.html')

@csrf_exempt
def uploads(request):
	# pdb.set_trace()
	file = request.FILES['file']


	fs = FileSystemStorage()
	fs.save(file.name, file)
	# pdb.set_trace()
	in_video = file.read()
	# x = backend.convert(in_video)
	

	# Name = request.FILES['file'].name

	response = HttpResponse(in_video, content_type="video/webm")
	response['Content-Disposition'] = 'attachment'
	
	# pdb.set_trace()

	return response
	