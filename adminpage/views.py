from django.shortcuts import render
from firebase import firebase
from . import auctionCards
import time

FIREBASE_SECRET = 'SQjRByOUlz7N0A0IlKjnBrPUkqiTfCfgOnJs9HdX'
FIREBASE_URL = 'https://project-oswa.firebaseio.com/'
firebase = firebase.FirebaseApplication(FIREBASE_URL,None)

def postAuctionCard(request):
    render(request, 'adminpage.html')

    productName = request.POST.get("productName")
    detail = request.POST.get("detail")
    price = request.POST.get("price")
    url = request.POST.get("url")
    ori_hour = request.POST.get("hour")
    ori_minute = request.POST.get("minute")
    minute, hour, bidding_time = "", "", 0
    if ori_hour is not None and ori_hour is not "": hour = int(request.POST.get("hour"))
    if ori_minute is not None and ori_minute is not "": minute = int(request.POST.get("minute"))
    if minute is not "" and hour is not "": bidding_time = ((hour*60)+(minute))*60 #milisecond

    if url is None or url is "": 
        url = "None"
    
    checkProduceName = productName is not None and productName is not ""
    checkDetail = detail is not None and detail is not ""
    checkPrice = price is not None and price is not ""
    checkBidTime = bidding_time != 0

    if checkProduceName and checkDetail and checkPrice and bidding_time:
        ts = time.time()
    try:
        result = firebase.post('auction_cards', {'productName': productName,'detail': detail, 'price': price, 'timestamp': ts, 'currentUser' : "-----", "url" : url, "endTime" : ts + bidding_time})
        print(result)
    except:
        message = "invalid cerediantials"
        return render(request,"adminpage.html",{"msg":message})
    return render(request, "adminpage.html")


def requestAuctionCard(request):
    render(request, 'check.html')
    auction_cards = []
    n = []

    result = firebase.get('/auction_cards', None)
    for key in result:
        productname = result[key]['productName']
        detail = result[key]['detail']
        price = result[key]['price']
        time = result[key]['timestamp']
        endTime = result[key]['endTime']
        n.append(productname)

        auction_card = auctionCards.make_card(productname, detail, price, time, endTime)
        auction_cards.append(auction_card)

    return render(request, 'check.html', {'products': auction_cards, 'n': n})



