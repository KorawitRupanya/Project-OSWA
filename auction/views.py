from django.shortcuts import render_to_response
from django.template import RequestContext
from auction.models import auction, bid
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib import auth
from auction.forms import *
from django.core.mail import send_mail
import datetime
from django.utils.translation import ugettext as _
from django.utils import translation
from rest_framework.parsers import JSONParser
from django.forms import model_to_dict
import json
from auction.serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponseNotFound

def bid_auction(request, id):
    if request.user.is_authenticated():
        if request.method == 'POST': 

            amount = request.POST['am']
            auct = auction.objects.filter(id=id)
            if auct:
                auct = auction.objects.get(id=id)
            else:
                msg = "Auction not found"
                return render_to_response("auction.html", {'msg': msg}, context_instance= RequestContext(request))

            if auct.lock == True:
                return render_to_response("lock.html", context_instance = RequestContext(request))

            if auct.lifecycle != 'A':
                msg = "Auction not active"
                return render_to_response("auction.html", {'auct':auct, 'msg': msg}, context_instance= RequestContext(request))
            if request.user == auct.seller:
                msg = "Can not bid on your own auction"
                return render_to_response("auction.html", {'auct':auct, 'msg': msg}, context_instance= RequestContext(request))
            if auct.min_price > float(amount) or (float(amount) - auct.min_price < 0.01):
                msg = "Amount have to be at least 0.01 bigger than minimum price."
                return render_to_response("auction.html", {'auct':auct, 'msg': msg}, context_instance= RequestContext(request))

            prev_bid_wining = bid.objects.filter(status='W', auct=auct)
            if prev_bid_wining:
                prev_bid_wining = bid.objects.filter(status='W', auct=auct).get()

            #in case that exists
            if prev_bid_wining:
                if prev_bid_wining.user == request.user:
                    msg = "You are already wining this auction."
                    return render_to_response("auction.html", {'auct':auct,'bb':prev_bid_wining, 'msg': msg}, context_instance= RequestContext(request))

                if float(amount) - prev_bid_wining.amount < 0.01:
                    msg = "Bid has to be at less 0.01 bigger than previous bids."
                    return render_to_response("auction.html", {'auct':auct,'bb':prev_bid_wining, 'msg': msg}, context_instance= RequestContext(request))

                send_mail('Bid losing.', "Somebody bid in the same auction that you did.", 'no_repli@yaas.com', [prev_bid_wining.user.email,], fail_silently=False)
                prev_bid_wining.status = 'L'
                prev_bid_wining.save()

            b = bid(user=request.user, amount=float(amount), auct=auct, status='W')
            b.save()

            #Optional feature: soft deadlines
            deadline = auct.deadline.strftime("%d/%m/%Y %H:%M:%S")
            d = datetime.datetime.strptime(deadline, "%d/%m/%Y %H:%M:%S")

            if (d - datetime.datetime.now()).total_seconds() < 350:
                auct.deadline = auct.deadline + datetime.timedelta(seconds = 350)
                auct.save()

            send_mail('New bid in your auction.', "Somebody bid in the one of your auctions.", 'no_repli@yaas.com', [auct.seller.email,], fail_silently=False)
            send_mail('Bid accepted.', "Your new bed has been acepted.", 'no_repli@yaas.com', [request.user.email,], fail_silently=False)

            msg = "Bid saved sucesfully."
            return render_to_response("auction.html", {'auct':auct,'bb':b, 'msg': msg}, context_instance= RequestContext(request))

        else:
            auct = auction.objects.filter(id=id)
            if auct:
                auct = auction.objects.get(id=id)
            else:
                msg = "Auction not found"
                return render_to_response("auction.html", {'msg': msg}, context_instance= RequestContext(request))

            b = bid.objects.filter(status='W', auct=auct)
            if b:
                b = bid.objects.filter(status='W', auct=auct).get()
            return render_to_response("auction.html", {'auct':auct, 'bb':b}, context_instance= RequestContext(request))

    else:
        mesg = _("You have to log in first")
        posts = auction.objects.all()
        return render_to_response("home.html", {'msg': mesg, 'posts': posts}, context_instance= RequestContext(request))



def profile(request):
    data = {
        'name': 'Vitor',
        'location': 'Finland',
        'is_active': True,
        'count': 28
    }
    dump = json.dumps(data)
    return HttpResponse(dump, content_type='application/json')