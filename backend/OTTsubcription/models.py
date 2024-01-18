from django.db import models
from User.models import User
from datetime import datetime, timedelta

DURATION_CHOICES = (
    (1, '1 Month'),
    (3, '3 Months'),
    (6, '6 Months'),
    (12, '12 Months')
)

GENRE_CHOICES = (
    ('Music', 'Music'),
    ('Movies', 'Movies'),
    ('Web Series', 'Web Series'),
    ('Sports', 'Sports'),
    ('News', 'News'),
    ('LiveTV', 'LiveTV'),
    ('Kids', 'Kids'),
    ('Others', 'Others')
)

RATING_CHOICES = (
    (1, '1'),
    (2, '2'),
    (3, '3'),
    (4, '4'),
    (5, '5')
)

class OTT(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(null = True, blank = True)
    ott_type = models.CharField(choices = GENRE_CHOICES, null = False, blank = False, max_length=20)
    rating = models.IntegerField(default = 0)
    logo = models.ImageField(upload_to='static/images/', null = True, blank = True)

    def __str__(self):
        return self.name
    

class review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='review_user', null = True, blank = True)
    ott = models.ForeignKey(OTT, on_delete=models.CASCADE, related_name='review_ott', null = True, blank = True)
    rating = models.IntegerField(choices = RATING_CHOICES, null = False, blank = False)
    text = models.TextField(null = True, blank = True)
    created_at = models.DateTimeField(auto_now_add=True, null = False, blank = False)

    def __str__(self):
        return f"{self.rating}-stars : - {self.text}"
    

class OTTSubscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    ott = models.ForeignKey(OTT, on_delete=models.CASCADE, related_name='ott')
    subscribed = models.BooleanField(default = False)
    subscribed_at = models.DateField( null = True, blank = True)
    duration = models.IntegerField(choices = DURATION_CHOICES, null = False, blank = False)
    subscribed_till = models.DateField(null = True, blank = True)
    cost = models.IntegerField(null = False, blank = False)
    shared = models.BooleanField(default = False)
    shared_with = models.ManyToManyField(User, blank = True, related_name='shared_with')

    def save(self, *args, **kwargs):
        self.subscribed_till = datetime.now().date() + timedelta(days=30*self.duration)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user} - {self.ott} - {self.subscribed}"