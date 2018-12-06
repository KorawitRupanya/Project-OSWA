import React, { Component, createRef } from "react";
import { Button } from "react-bootstrap";
import pro from "../pictures/profile.png";
import "../css/AuctionPageTemplate.css";
import { auth } from "../../../backend/firebase";
import App from "./App";

class SignInBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignInClicked: false,
      isSignUpClicked: false,
      email: '',
      password:'',
    };
    this.signInClicked = this.signInClicked.bind(this);
    this.signUpClicked = this.signUpClicked.bind(this);


  }

  signInClicked() {
    this.setState({
      isSignInClicked: true
    });
  }

  signUpClicked() {
    this.setState({
      isSignUpClicked: true
    });
  }

  updateValue(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    const email= this.state.email;
    const password = this.state.password;
    const promise = auth.createUserWithEmailAndPassword(email,password);
    console.log(promise)
    promise = auth.signInWithEmailAndPassword(email,password);
    console.log(promise);
    this.setState({
         email: '',
         password: '',
         isSignUpClicked: false
    })
 }

  handleSignin = (e) => {
    e.preventDefault();
    const email= this.state.email;
    const password = this.state.password;
    auth.signInWithEmailAndPassword(email,password);
    this.setState({
        email: '',
        password: ''
    })
  }

  handleLogOut = (e) => {
    e.preventDefault();
    auth.signOut();
  }

  reload(){
    window.location.reload();
  }

  render() {
    auth.onAuthStateChanged(user =>{
      if(user){
        if(localStorage.getItem('isLogin') == 'false'){
          this.reload();
        }
        localStorage.removeItem('isLogin');
        localStorage.setItem('isLogin', 'true');
      }else {
        if(localStorage.getItem('isLogin') == 'true'){
          this.reload();
        }
        localStorage.removeItem('isLogin');
        localStorage.setItem('isLogin', 'false');
      }
    });
    const signInClicked = this.state.isSignInClicked;
    const signUpClicked = this.state.isSignUpClicked;
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin == "true") {
      return (
        <div>
            <Button bsStyle="warning" md={10} onClick={(evt) => this.handleLogOut(evt)}>
              Logout
            </Button>
        </div>
      );
    } else 
    if (signInClicked) {
      return (
        <div>
            <form>
            <h2>Sign In</h2>
            <dir/>
            <input placeholder="Username" type="email" name="email" value={this.state.email} onChange={evt => this.updateValue(evt)}/>
            <input placeholder="Password" name="password" type="password" value={this.state.password} ref={this.password} autoComplete="none" onChange={evt => this.updateValue(evt)}/>
            <dir/>
            <Button bsStyle="warning" md={10} type="submit" onClick={(evt) => this.handleSignin(evt)}>Log in</Button>
            </form>
        </div>
      );
    } else if (signUpClicked) {
      return (
          <div>
            <form>
            <h2>Sign Up</h2>
            <dir/>
            <input placeholder="Username" type="email" name="email" value={this.state.email} onChange={evt => this.updateValue(evt)}/>
            <input placeholder="Password" name="password" type="password" value={this.state.password} ref={this.password} autoComplete="none" onChange={evt => this.updateValue(evt)}/>
            <dir/>
            <Button bsStyle="warning" md={10} type="submit" onClick={(evt) => this.handleSignUp(evt)}>Submit</Button>
            </form>
          </div>
      );
    } else {
      return (
        <div>
          <Button bsStyle="primary" md={10} onClick={this.signUpClicked}>
            Sign Up
          </Button>
          <hr
            style={{
              color: "gray",
              backgroundColor: "gray",
              height: 1
            }}
          />
          <Button bsStyle="warning" onClick={this.signInClicked}>
            Sign in
          </Button>
        </div>
      );
    }
    
  }


}


export default SignInBar;
