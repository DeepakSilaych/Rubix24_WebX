# Generated by Django 4.2.4 on 2024-01-17 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OTTsubcription', '0003_ott_logo_ottsubscription'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ottsubscription',
            name='subscribed_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
