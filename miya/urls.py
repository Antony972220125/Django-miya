from django.conf.urls import url

from miya import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register/$', views.register, name='register'),
    url(r'^login/$', views.login, name='login'),
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^GoodsShow/$', views.GoodsShow, name='GoodsShow'),
]