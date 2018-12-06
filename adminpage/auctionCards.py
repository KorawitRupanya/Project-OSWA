class AuctionCard(object):
    productname = ""
    detail = ""
    price = 0
    time = ""
    endtime = 0

    # The class initializer
    def __init__(self, productname, detail, price, time, endtime):
        self.productname = productname
        self.detail = detail
        self.price = price
        self.time = time
        self.endtime = endtime

    def __str__(self):
        return "productname: {}, detail: {}, price: {}, time: {}, endtime: {}".format(self.productname, self.detail, self.price, self.time, self.endtime)

    def __repr__(self):
        return "productname: {}, detail: {}, price: {}, time: {}, endtime: {}".format(self.productname, self.detail, self.price, self.time, self.endtime)

def make_card(productname, detail, price, time, endtime):
    auctionCard = AuctionCard(productname, detail, price, time, endtime)
    return auctionCard

