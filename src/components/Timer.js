import React, { Component } from "react";
import { Button } from "react-bootstrap";

class TimerInput extends Component {
  render() {
    return (
      <div style={{ marginLeft: 100 }}>
        <h3>Input your desired time</h3>
        <input
          type="number"
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        />
      </div>
    );
  }
}

class Timer extends Component {
  render() {
    return (
      <div>
        <strong style={{ fontSize: 24, marginLeft: 100, color: "pink" }}>
          {this.props.value}:{this.props.minutes}:{this.props.seconds}
        </strong>
      </div>
    );
  }
}

class StartButton extends Component {
  render() {
    return (
      <div style={{ marginLeft: 130 }}>
        <Button
          className="warning"
          disabled={!this.props.value}
          onClick={this.props.startCountDown}
        >
          Start
        </Button>
      </div>
    );
  }
}

class TimerBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: "00",
      value: "",
      isClicked: false
    };
    this.secondsRemaining = 0;
    this.intervalHandle = 0;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  tick() {
    var hour = Math.floor(this.secondsRemaining / 3600);
    var min = Math.floor((this.secondsRemaining - hour * 3600) / 60);
    var sec = this.secondsRemaining - (hour * 3600 + min * 60);

    this.setState({
      value: hour,
      minutes: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + this.state.min
      });
    }

    if (hour === 0) {
      this.setState({
        value: "00"
      });
    }

    if ((hour < 10) & (hour > 0)) {
      this.setState({
        value: "0" + this.state.value
      });
    }

    if ((min === 0) & (sec === 0) & (hour === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 3600 - 1;
    this.setState({
      isClicked: true
    });
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return (
        <div>
          <div className="row">
            <Timer
              value={this.state.value}
              minutes={this.state.minutes}
              seconds={this.state.seconds}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row">
            <TimerInput
              value={this.state.value}
              handleChange={this.handleChange}
            />
            <Timer
              value={this.state.value}
              minutes={this.state.minutes}
              seconds={this.state.seconds}
            />
            <StartButton
              startCountDown={this.startCountDown}
              value={this.state.value}
            />
          </div>
        </div>
      );
    }
  }
}

export default TimerBox;
