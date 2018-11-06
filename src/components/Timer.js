import React, { Component } from "react";
import { Button } from "react-bootstrap";

class TimerInput extends Component {
  render() {
    return (
      <div>
        <input type="number" required />
      </div>
    );
  }
}

class Timer extends Component {
  render() {
    return (
      <div>
        <strong style={{ fontSize: "24px", color: "pink" }} />
      </div>
    );
  }
}

class StartButton extends Component {
  render() {
    return (
      <div>
        <Button>Start</Button>
      </div>
    );
  }
}

class TimerBox extends Component {
  render() {
    return (
      <div>
        <TimerInput />
        <Timer />
        <StartButton />
      </div>
    );
  }
}
