from django.shortcuts import render
from firebase import firebase

firebase = firebase.FirebaseApplication('https://project-oswa.firebaseio.com/',None)
# result = firebase.get('/user', None)
# print(result)
# result = firebase.put('user','three', {'test':'hey'})
# result = firebase.get('/user', None)
# print(result)


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

# return render(request,"signIn.html",{"msg":message})
# print(user)
# return render(request, "welcome.html",{"e":email})
