import { database } from "./firebase";

var productName = [];
var detail = [];
var price = [];
var time = [];
var endTime = [];
var id = [];
var currentUser = [];
var url = [];

function getFirebaseData() {
  var valueCheck;

  var ref = database.ref("auction_cards");

  ref.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();

      (function wait() {
        if (childData.productName) {
          if (!id.includes(childSnapshot.key)) {
            id.push(childSnapshot.key);
            productName.push(childData.productName);
            detail.push(childData.detail);
            price.push(childData.price);
            time.push(childData.timestamp);
            endTime.push(childData.endTime);
            currentUser.push(childData.currentUser);
            url.push(childData.url);
          }
        } else {
          setTimeout(wait, 500);
        }
      })();

      if (childData.productName != null) valueCheck = true;
      else valueCheck = false;
    });
  });
  return valueCheck;
}

function waitData() {
  if (getFirebaseData()) {
    localStorage.removeItem("produceName");
    localStorage.removeItem("detail");
    localStorage.removeItem("price");
    localStorage.removeItem("time");
    localStorage.removeItem("endTime");
    localStorage.removeItem("id");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("url");

    localStorage.setItem("produceName", productName);
    localStorage.setItem("detail", detail);
    localStorage.setItem("price", price);
    localStorage.setItem("time", time);
    localStorage.setItem("endTime", endTime);
    localStorage.setItem("id", id);
    localStorage.setItem("currentUser", currentUser);
    localStorage.setItem("url", url);
  } else {
    setTimeout(waitData, 500);
  }
}

export {
  getFirebaseData,
  productName,
  detail,
  price,
  time,
  endTime,
  id,
  currentUser,
  waitData
};
