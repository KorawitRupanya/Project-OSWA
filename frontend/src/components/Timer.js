import React, { Component } from "react";
import { Button, Col, Row, Grid } from "react-bootstrap";

class TimerInput extends Component {
  render() {
    return (
      <div>
        <Col md={1}>
          <h5 style={{ color: "white" }}>hr</h5>
          <input
            style={{ width: "50px" }}
            type="number"
            hour={this.props.hour}
            onChange={this.props.handleChangeHr}
            required
          />
        </Col>
        <Col md={1}>
          <h5 style={{ color: "white" }}>min</h5>
          <input
            style={{ width: "50px" }}
            type="number"
            minutes={this.props.minutes}
            onChange={this.props.handleChangeMin}
            required
          />
        </Col>
        <Col md={2}>
          <h5 style={{ color: "white" }}>sec</h5>
          <input
            style={{ width: "50px" }}
            type="number"
            seconds={this.props.seconds}
            onChange={this.props.handleChangeSec}
            required
          />
        </Col>
      </div>
    );
  }
}

class Timer extends Component {
  render() {
    return (
      <div style={{ marginLeft: "110px" }}>
        <strong style={{ fontSize: 36, color: "pink" }}>
          {this.props.hour}:{this.props.minutes}:{this.props.seconds}
        </strong>
      </div>
    );
  }
}

class StartButton extends Component {
  render() {
    return (
      <div>
        <Button
          bsStyle="warning"
          bsSize="large"
          disabled={
            this.props.hour === "" ||
            this.props.minutes === "" ||
            this.props.seconds === "" ||
            this.props.hour < 0 ||
            this.props.minutes < 0 ||
            this.props.seconds < 0
          }
          onClick={this.props.startCountDown}
          style={{ marginTop: "15px" }}
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
      seconds: "",
      minutes: "",
      hour: "",
      isClicked: false
    };
    this.secondsRemaining = 0;
    this.intervalHandle = 0;
    this.handleChangeHr = this.handleChangeHr.bind(this);
    this.handleChangeMin = this.handleChangeMin.bind(this);
    this.handleChangeSec = this.handleChangeSec.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChangeHr(event) {
    this.setState({
      hour: event.target.value
    });
  }

  handleChangeMin(event) {
    this.setState({
      minutes: event.target.value
    });
  }

  handleChangeSec(event) {
    this.setState({
      seconds: event.target.value
    });
  }

  tick() {
    var hour = Math.floor(this.secondsRemaining / 3600);
    var min = Math.floor((this.secondsRemaining - hour * 3600) / 60);
    var sec = this.secondsRemaining - (hour * 3600 + min * 60);

    this.setState({
      hour: hour,
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
        minutes: "0" + this.state.minutes
      });
    }

    if (hour === 0) {
      this.setState({
        hour: "00"
      });
    }

    if ((hour < 10) & (hour > 0)) {
      this.setState({
        hour: "0" + this.state.hour
      });
    }

    if ((min === 0) & (sec === 0) & (hour === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let hr = this.state.hour * 3600;
    let m = this.state.minutes * 60;
    let s = this.state.seconds * 1;
    this.secondsRemaining = hr + m + s;

    this.setState({
      isClicked: true
    });
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return (
        <Row
          style={{ textAlign: "left", marginLeft: "1px", marginTop: "10px" }}
        >
          <Timer
            hour={this.state.hour}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
          />
        </Row>
      );
    } else {
      return (
        <Row className="show-grid" style={{ textAlign: "left" }}>
          <TimerInput
            hour={this.state.hour}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            handleChangeHr={this.handleChangeHr}
            handleChangeMin={this.handleChangeMin}
            handleChangeSec={this.handleChangeSec}
          />
          <StartButton
            startCountDown={this.startCountDown}
            hour={this.state.hour}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
          />
        </Row>
      );
    }
  }
}

export default TimerBox;
