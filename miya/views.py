import hashlib
import random
import time

from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.
from miya.models import User, Wheel


def index(request):
    token = request.session.get('token')
    if token:
        user = User.objects.get(token=token)
        return render(request, 'index.html', context={'username': user.username})
    else:
        wheels = Wheel.objects.all()
        return render(request, 'index.html', context={'wheels': wheels})


def genereate_pd(password):
    md5 = hashlib.md5()
    md5.update(password.encode('utf-8'))
    return md5.hexdigest()


def generate_token():
    token = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(token.encode('utf-8'))
    return md5.hexdigest()

def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        tel = request.POST.get('tel')
        password = request.POST.get('password')
        u_password = request.POST.get('u_password')
        if password == u_password:
            print(username, tel, password)

            user = User()
            user.username = username
            user.password = genereate_pd(password)
            user.token = generate_token()
            user.tel = tel
            user.save()

            response = redirect('ma:index')
            request.session['token'] = user.token
            request.session.set_expiry(60)
    return response



def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = genereate_pd(request.POST.get('password'))
        users = User.objects.filter(username=username).filter(password=password)
        if users.count():
            response = redirect('ma:index')
            user = users.first()
            user.token = generate_token()
            user.save()
            request.session['token'] = user.token
            request.session.set_expiry(60*10)
            return response
        else:
            return render(request, 'login.html', context={'err': '用户名或密码错误'})





def cart(request):
    return render(request, 'cart.html')