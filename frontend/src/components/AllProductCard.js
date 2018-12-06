import React, { Component } from "react";
import CreateProductCard from "./ProductCardTemplate";
import { Grid, Row } from "react-bootstrap";

class AllProductCard extends Component {
  AllCards = () => {
    let allCards = [];

    const productName = localStorage.getItem("produceName");
    const detail = localStorage.getItem("detail");
    const price = localStorage.getItem("price");
    const time = localStorage.getItem("time");
    const endTime = localStorage.getItem("endTime");
    if (endTime === null) {
      console.log("end time is null.");
    }
    const id = localStorage.getItem("id");
    const currentUser = localStorage.getItem("currentUser");
    const url = localStorage.getItem("url");

    let productNameArray;
    let detailArray;
    let priceArray;
    let timeArray;
    let endTimeArray;
    let idArray;
    let currentUserArray;
    let urlArray;

    if (productName == null) {
      return (
        <img src={"https://i.ibb.co/qBLtMKr/reallyrealone.gif"} alt="loading" />
      );
    } else {
      productNameArray = decodeTextArray(productName);
      detailArray = decodeTextArray(detail);
      priceArray = decodeTextArray(price);
      timeArray = decodeNumArray(time);
      endTimeArray = decodeNumArray(endTime);
      idArray = decodeTextArray(id);
      currentUserArray = decodeTextArray(currentUser);
      urlArray = decodeTextArray(url);

      try {
        while (productNameArray.length != 0) {
          var dateTime = timeArray.pop();
          var date = new Date(dateTime * 1000);
          allCards.push(
            <CreateProductCard
              productName={productNameArray.pop()}
              detail={detailArray.pop()}
              startingPrice={priceArray.pop()}
              date={date.toString()}
              time={dateTime}
              endTime={endTimeArray.pop()}
              currentUser={currentUserArray.pop()}
              productID={idArray.pop()}
              pictureURL={urlArray.pop()}
            />
          );
        }
      } catch (err) {
        return <h2 style={{ color: "orange" }}>ERROR</h2>;
      }
    }

    return allCards;
  };

  render() {
    return (
      <Grid style={{ height: "100vh" }} fluid>
        <Row className="show-grid">{this.AllCards()}</Row>
      </Grid>
    );
  }
}

function decodeTextArray(encodeText) {
  return encodeText.split(",");
}

function decodeNumArray(encodeText) {
  try {
    const textArray = encodeText.split(",");
    const numberArray = [];

    for (let i = 0; i < textArray.length; i++)
      numberArray.push(parseFloat(textArray[i]));

    return numberArray;
  } catch (err) {
    return encodeText.split(",");
  }
}
export default AllProductCard;
