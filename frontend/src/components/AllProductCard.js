import React, { Component } from "react";
import CreateProductCard from "./ProductCardTemplate"
import AddBtn from "./AddBtn";
import { Grid, Row } from "react-bootstrap";

class AllProductCard extends Component {

  AllCards = () => {
    let allCards = []
   
    // for(let i = 0; i < productName.length; i++){
    //   allCards.push(
    //   <CreateProductCard produceName={productName.pop()} 
    //   detail={detail.pop()}
    //   startingPrice={price.pop()}
    //   time={time.pop()} />
    //   )
    // }
    return allCards;
  }

  render() {
  
    return (
      <Grid fluid>
        <AddBtn />
        <Row className="show-grid">
          {/* {this.AllCards()}
          <CreateProductCard produceName={productName.pop()} 
      detail={detail.pop()}
      startingPrice={price.pop()}
      time={time.pop()} /> */}
        </Row>
      </Grid>
    );
  }
}

export default AllProductCard;
