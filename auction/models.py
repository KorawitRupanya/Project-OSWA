from django.db import models

class auction(models.Model):
    LIFECYCLES_ = (
        ('A', 'Active'),
        ('D', 'Due'),
        ('E', 'End'),
    )

    class Meta:
        ordering = ['deadline']

    class bid(models.Model):
    STATUS_ = (
        ('W', 'Wining'),
        ('L', 'Losing'),
    )

    auct = models.ForeignKey(auction)
    user = models.ForeignKey(User)
    amount = models.FloatField()
    status = models.CharField(max_length=1, choices=STATUS_)

    productName = models.CharField(max_length=150)
    describtion = models.CharField()
    lifecycle = models.CharField(max_length=1, choices=LIFECYCLES_)
    min_price = models.FloatField()
    deadline = models.TimeField()
