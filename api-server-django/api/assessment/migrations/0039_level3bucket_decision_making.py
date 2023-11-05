# Generated by Django 3.2.13 on 2023-11-05 07:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('assessment', '0038_remove_userprofile_email_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='level3bucket',
            name='decision_making',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='level3decision_group', to='assessment.decisionmaking'),
        ),
    ]