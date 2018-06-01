import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import Anim from './anim'
import './style.css'

class App extends Component {


  render() {
    return(
      <div className="App">
        <Anim />
      </div>
    );
  }
}

export default App;
// <div className="about" ref={c => this.container = c} />
// <text className="text" ref={c => this.container = c} >Press Play then Click a Circle</text>
