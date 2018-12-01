import {database} from "./firebase"

const productName = []
const detail = [];
const price = [];
const time = [];
const id = []
function getFirebaseData(){
    var ref = database.ref("auction_cards");
    
    ref.on("child_added", function(snapshot) {
        var newProduct = snapshot.val();
        console.log("Product name: " + newProduct.productName);
        console.log("Detail: " + newProduct.detail);
        console.log("Price: " + newProduct.price);
        console.log("Date: " + newProduct.time);
        console.log("Post ID: " + snapshot.key);
        productName.push(newProduct.productName);
        detail.push(newProduct.detai);
        price.push(newProduct.price);
        time.push(newProduct.time);
        id.push(snapshot.key);
    });

    console.log("in get data", productName);
}

export{
    getFirebaseData,
    productName,
    detail,
    price,
    time,
    id,
}
