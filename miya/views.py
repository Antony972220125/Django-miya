import hashlib
import random
import time

from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.
from miya.models import User, Wheel, Goods, TypeGoods, SingleGoods, SingleGoods2, GoodsDesc, Cart


def index(request):
    wheels = Wheel.objects.all()
    goods = Goods.objects.all()
    typegoods = TypeGoods.objects.all()
    data = {
        'wheels': wheels,
        'goods': goods,
        'typegoods': typegoods,
    }
    token = request.session.get('token')
    if token:
        user = User.objects.get(token=token)
        return render(request, 'index.html', context={
            'username': user.username,
            'img': user.img,
            'wheels': wheels,
            'goods': goods,
            'typegoods': typegoods,
        })
    else:
        return render(request, 'index.html', context=data)


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


def logout(request):
    request.session.flush()
    return redirect('ma:index')



def cart(request):
    token = request.session.get('token')
    if token:
        user = User.objects.get(token=token)
        carts = Cart.objects.filter(user=user)
        return render(request, 'cart.html', context={'img': user.img, 'username': user.username, 'carts': carts})
    else:
        return redirect('ma:login')


def GoodsShow(request, goodsid):
    singlegoods = SingleGoods.objects.all()
    singlegoods2 = SingleGoods2.objects.all()
    goodsdesc = GoodsDesc.objects.all()
    if goodsid == "1":
        goodsdesc = goodsdesc[0]
    elif goodsid == "2":
        goodsdesc = goodsdesc[1]
    elif goodsid == "3":
        goodsdesc = goodsdesc[2]
    elif goodsid == "4":
        goodsdesc = goodsdesc[3]
    elif goodsid == "5":
        goodsdesc = goodsdesc[4]

    data = {
        'singlegoods': singlegoods,
        'singlegoods2': singlegoods2,
        'goodsdesc': goodsdesc,

    }
    token = request.session.get('token')
    if token:
        user = User.objects.get(token=token)
        return render(request, 'GoodsShow.html', context={
            'username': user.username,
            'img': user.img,
            'singlegoods': singlegoods,
            'singlegoods2': singlegoods2,
            'goodsdesc': goodsdesc,
        })
    else:

        return render(request, 'GoodsShow.html', context=data)
