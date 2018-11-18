from django.shortcuts import render
from firebase import firebase

firebase = firebase.FirebaseApplication('https://project-oswa.firebaseio.com/',None)

def index(request):
    return render(request, 'adminpage.html')

def postAuctionCard(request):
    render(request, 'adminpage.html')

    productName = request.POST.get('productName')
    detail = request.POST.get("detail")
    price = request.POST.get("price")
    
    try:
        result = firebase.post('auction_cards', {'productName,': productName,'detail': detail, 'price': price})
        print(result)
    except:
        message = "invalid cerediantials"
        return render(request,"adminpage.html",{"msg":message})
    return render(request, "adminpage.html")

