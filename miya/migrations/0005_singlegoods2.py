# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-12-08 06:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('miya', '0004_singlegoods'),
    ]

    operations = [
        migrations.CreateModel(
            name='SingleGoods2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=256)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
            ],
        ),
    ]