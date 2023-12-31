# Generated by Django 3.2.13 on 2023-10-23 07:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('assessment', '0010_auto_20231023_1252'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='lwdimension_field1',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='lwdimension_field1_jobs', to='assessment.bucket'),
        ),
        migrations.AddField(
            model_name='job',
            name='lwdimension_field2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='lwdimension_field2_jobs', to='assessment.bucket'),
        ),
        migrations.AddField(
            model_name='job',
            name='lwdimension_field3',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='lwdimension_field3_jobs', to='assessment.bucket'),
        ),
    ]
