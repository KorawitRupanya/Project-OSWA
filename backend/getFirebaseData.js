import {database} from "./firebase"

var productName = [];
var detail = [];
var price = [];
var time = [];
var id = [];

function getFirebaseData(){
    localStorage.removeItem('produceName');
    localStorage.removeItem('detail');
    localStorage.removeItem('price');
    localStorage.removeItem('time');
    localStorage.removeItem('id');
    
    var valueCheck;

    var ref = database.ref("auction_cards");

    
    ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();

        (function wait() {
            if ( childData.productName ) {
                if(!id.includes(childSnapshot.key)){
                    id.push(childSnapshot.key);
                    productName.push(childData.productName);
                    detail.push(childData.detail);
                    price.push(childData.price);
                    time.push(childData.timestamp);
                }
  
            } else {
                setTimeout( wait, 500 );
            }
        })();

        if(childData.productName != null) valueCheck = true;
        else valueCheck = false
    });

    })
    return valueCheck;
}

function waitData() {
    if ( getFirebaseData() ) {
        console.log(productName);
        localStorage.setItem('produceName', productName);
        localStorage.setItem('detail', detail);
        localStorage.setItem('price', price);
        localStorage.setItem('time', time);
        localStorage.setItem('id', id);
    } else {
        setTimeout( waitData, 500 );
    }
};


export{
    getFirebaseData,
    productName,
    detail,
    price,
    time,
    id,
    waitData
};
