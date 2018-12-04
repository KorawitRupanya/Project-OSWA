from django.test import TestCase
from .auctionCards import AuctionCard
from .auctionCards import make_card

class test_make_auctionccards(TestCase):

        def test_make_auctionccards(self):
            card1 =  make_card('neung','new watch','100','1543471921.58742')
            self.assertEqual(card1.productname,'neung')
            self.assertEqual(card1.detail,'new watch')
            self.assertEqual(card1.price,'100')
            self.assertEqual(card1.time,'1543471921.58742')

