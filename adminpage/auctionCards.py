class AuctionCard(object):
    productname = ""
    detail = ""
    price = 0
    time = ""

    # The class initializer
    def __init__(self, productname, detail, price, time):
        self.productname = productname;
        self.detail = detail;
        self.price = price;
        self.time = time;

    def __str__(self):
        return "productname: {}, detail: {}, price: {}, time: {}".format(self.productname, self.detail, self.price, self.time)

    def __repr__(self):
        return "productname: {}, detail: {}, price: {}, time: {}".format(self.productname, self.detail, self.price, self.time)

def make_card(productname, detail, price, time):
    auctionCard = AuctionCard(productname, detail, price, time)
    return auctionCard

