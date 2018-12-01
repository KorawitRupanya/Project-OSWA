import {database} from "./firebase"

function getFirebaseData(){
    console.log("ddddd");
    localStorage.clear();
    console.log("get fire base");
    var productName = [];
    var detail = [];
    var price = [];
    var time = [];
    var id = [];

    var ref = database.ref("auction_cards");

    
    ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
        console.log("Product name: " + childData.productName);
        console.log("Detail: " + childData.detail);
        console.log("Price: " + childData.price);
        console.log("Date: " + childData.timestamp);
        console.log("Post ID: " + childSnapshot.key);
        

        setTimeout(function () {
            productName.push(childData.productName);
            detail.push(childData.detail);
            price.push(childData.price);
            time.push(childData.timestamp);
            id.push(childSnapshot.key);
          }, 500);

    });
    })
    

    // ref.on("child_added", function(snapshot, prevChildKey) {
    //     var newProduct = snapshot.val();
    //     console.log("Product name: " + newProduct.productName);
    //     console.log("Detail: " + newProduct.detail);
    //     console.log("Price: " + newProduct.price);
    //     console.log("Date: " + newProduct.time);
    //     console.log("Previous Post ID: " + prevChildKey);
    //   });

    // ref.on("child_added", function(snapshot) {
    //     var newProduct = snapshot.val();
    //     console.log("Product name: " + newProduct.productName);
    //     console.log("Detail: " + newProduct.detail);
    //     console.log("Price: " + newProduct.price);
    //     console.log("Date: " + newProduct.time);
    //     console.log("Post ID: " + snapshot.key);
    //     productName.push(newProduct.productName);
    //     detail.push(newProduct.detai);
    //     price.push(newProduct.price);
    //     time.push(newProduct.time);
    //     id.push(snapshot.key);

    // });

    console.log(productName);
    localStorage.setItem('produceName', productName);
    localStorage.setItem('detail', detail);
    localStorage.setItem('price', price);
    localStorage.setItem('time', time);
    localStorage.setItem('id', id);
}

export{
    getFirebaseData,
    productName,
    detail,
    price,
    time,
    id,
};
