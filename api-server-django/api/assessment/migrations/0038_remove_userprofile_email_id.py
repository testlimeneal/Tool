# Generated by Django 3.2.13 on 2023-11-04 16:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('assessment', '0037_auto_20231104_1828'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='email_id',
        ),
    ]
