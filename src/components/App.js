import React, { Component } from "react";
import AuctionNav from "./AuctionNav.js";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuctionNav role="navigation" />
        <body>
          <header>Hello World</header>
        </body>
      </div>
    );
  }
}

export default App;
