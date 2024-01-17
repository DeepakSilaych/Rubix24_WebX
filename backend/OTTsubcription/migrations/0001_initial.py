# Generated by Django 4.2.4 on 2024-01-17 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')])),
                ('text', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='OTT',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True, null=True)),
                ('ott_type', models.CharField(choices=[('Music', 'Music'), ('Movies', 'Movies'), ('Web Series', 'Web Series'), ('Sports', 'Sports'), ('News', 'News'), ('LiveTV', 'LiveTV'), ('Kids', 'Kids'), ('Others', 'Others')], max_length=20)),
                ('rating', models.IntegerField(default=0)),
                ('review', models.ManyToManyField(blank=True, null=True, related_name='review', to='OTTsubcription.review')),
            ],
        ),
    ]
