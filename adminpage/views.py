from django.shortcuts import render
from firebase import firebase
from . import auctionCards
import datetime

firebase = firebase.FirebaseApplication('https://project-oswa.firebaseio.com/',None)

def postAuctionCard(request):
    render(request, 'adminpage.html')

    productName = request.POST.get('productName')
    detail = request.POST.get("detail")
    price = request.POST.get("price")
    
    if productName is not None:
        time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    try:
        result = firebase.post('auction_cards', {'productName': productName,'detail': detail, 'price': price, 'time': time})
        print(result)
    except:
        message = "invalid cerediantials"
        return render(request,"adminpage.html",{"msg":message})
    return render(request, "adminpage.html")


def requestAuctionCard(request):
    render(request, 'check.html')
    auction_cards = []

    result = firebase.get('/auction_cards', None)
    for key in result:
        productname = result[key]['productName']
        detail = result[key]['detail']
        price = result[key]['price']
        time = result[key]['time']
        auction_card = auctionCards.make_card(productname, detail, price, time)
        auction_cards.append(auction_card)

    for auction_card in auction_cards: print(auction_card)

    return render(request, 'check.html', {'products': auction_cards})



