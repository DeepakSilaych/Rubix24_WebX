from django.db import models

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
    review = models.ManyToManyField('review', blank = True, related_name='review')
    rating = models.IntegerField(default = 0)

    def __str__(self):
        return self.name
    

class review(models.Model):
    rating = models.IntegerField(choices = RATING_CHOICES, null = False, blank = False)
    text = models.TextField(null = True, blank = True)
    created_at = models.DateTimeField(auto_now_add=True, null = False, blank = False)

    def __str__(self):
        return f"{self.rating}-stars : - {self.text}"