import React, { Component } from "react";
import CreateProductCard from "./ProductCardTemplate"
import AddBtn from "./AddBtn";
import { Grid, Row } from "react-bootstrap";

class AllProductCard extends Component {

  AllCards = () => {
    let allCards = []

    const produceName = localStorage.getItem('produceName');
    const detail = localStorage.getItem('detail');
    const price = localStorage.getItem('price');
    const time = localStorage.getItem('time');
    const id = localStorage.getItem('id');

    let produceNameArray;
    let detailArray;
    let priceArray;
    let timeArray;
    let idArray;

    if(produceName == null) 
    return <image src={"https://i.ibb.co/6F614DB/reallyrealone.gif"} alt="loading"/>

      else{
      produceNameArray = decodeTextArray(produceName);
      detailArray = decodeTextArray(detail);
      priceArray = decodeTextArray(price);
      timeArray = decodeNumArray(time);
      idArray = decodeTextArray(id);
      
      try{
        while(produceNameArray.length != 0){
          var date = new Date(timeArray.pop() * 1000);
          console.log(date);
          allCards.push(
          <CreateProductCard produceName={produceNameArray.pop()} 
          detail={detailArray.pop()}
          startingPrice={priceArray.pop()}
          time={date.toString()} />
          )
        }

      }catch(err){
        return  <h2 style={{ color: "orange" }}>ERROR</h2>
      }
    
    }
   
    return allCards;
  }

  render() {
  
    return (
      <Grid fluid>
        <Row className="show-grid">
           {this.AllCards()}
        </Row>
      </Grid>
    );
  }
}

function decodeTextArray(encodeText){
    return encodeText.split(',');
}

function decodeNumArray(encodeText){
  try{
    const textArray = encodeText.split(',');
    const numberArray = [];

    for(let i = 0; i < textArray.length; i++) numberArray.push(parseFloat(textArray[i]));
    
    return numberArray;

  }catch(err){
    return encodeText.split(',');
  }
}
export default AllProductCard;
