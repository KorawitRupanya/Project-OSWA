import {database} from "./firebase"

function getFirebaseData(){
    var ref = database.ref("auction_cards");
    
    ref.on("child_added", function(snapshot, prevChildKey) {
        var newProduct = snapshot.val();
        console.log("Product name: " + newProduct.productName);
        console.log("Detail: " + newProduct.detail);
        console.log("Price: " + newProduct.price);
        console.log("Date: " + newProduct.time);
        console.log("Previous Post ID: " + prevChildKey);
    });
}

export{
    getFirebaseData
}
