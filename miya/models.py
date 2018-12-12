from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    img = models.CharField(max_length=100, default='title.ico')
    tel = models.CharField(max_length=20, unique=True)
    token = models.CharField(max_length=256, default='')


class Wheel(models.Model):
    img = models.CharField(max_length=50)


class Goods(models.Model):
    goodsid = models.IntegerField()
    img = models.CharField(max_length=100)
    tite = models.CharField(max_length=256)
    news = models.DecimalField(max_digits=7, decimal_places=2)
    old = models.DecimalField(max_digits=7, decimal_places=2)
    huy = models.CharField(max_length=100)
    btn = models.CharField(max_length=50)


class TypeGoods(models.Model):
    img1 = models.CharField(max_length=100)
    img2 = models.CharField(max_length=100)
    img3 = models.CharField(max_length=100)
    img4 = models.CharField(max_length=100)

    titt1 = models.CharField(max_length=256)
    titt2 = models.CharField(max_length=256)
    titt3 = models.CharField(max_length=256)

    newss1 = models.DecimalField(max_digits=7, decimal_places=2)
    newss2 = models.DecimalField(max_digits=7, decimal_places=2)
    newss3 = models.DecimalField(max_digits=7, decimal_places=2)

    old1 = models.DecimalField(max_digits=7, decimal_places=2)
    old2 = models.DecimalField(max_digits=7, decimal_places=2)
    old3 = models.DecimalField(max_digits=7, decimal_places=2)


class SingleGoods(models.Model):
    img = models.CharField(max_length=100)
    title = models.CharField(max_length=256)
    price = models.DecimalField(max_digits=7, decimal_places=2)


class SingleGoods2(models.Model):
    img = models.CharField(max_length=100)
    title = models.CharField(max_length=256)
    price = models.DecimalField(max_digits=7, decimal_places=2)


class GoodsDesc(models.Model):
    goodsid = models.IntegerField()
    images = models.CharField(max_length=100)
    tite = models.CharField(max_length=256)
    title = models.CharField(max_length=256)
    ptwo = models.CharField(max_length=256)
    yahei = models.CharField(max_length=100)
    item_price = models.DecimalField(max_digits=7, decimal_places=2)
    old_price = models.DecimalField(max_digits=7, decimal_places=2)
    discount = models.CharField(max_length=100)
    reduction = models.CharField(max_length=50)
    wushi = models.CharField(max_length=100)
    selects = models.CharField(max_length=50)
    imag = models.CharField(max_length=100)
    numname = models.CharField(max_length=20)


class Cart(models.Model):
    user = models.ForeignKey(User)
    goods = models.ForeignKey(GoodsDesc)
    number = models.IntegerField()
    isselect = models.BooleanField(default=True)






