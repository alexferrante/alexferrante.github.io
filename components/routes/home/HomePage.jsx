import React from 'react';
import Progress from '../../ui/Progress'

import '../../../styles/main.scss'

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}`;
    this.setState({
      scrolled: scrolled
    });
  };

  render() {
    let x = window.innerWidth * .98;
    let y = window.innerHeight * .94;
    let currEl = document.elementFromPoint(x, y)
    let r, g, b, hsp;
    let accStyle = 'light';
    function evalColor(color) {
      if (color.match(/^rgb/)) {
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        r = color[1];
        g = color[2];
        b = color[3];
      } else {
        color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
      }
      hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
      );
      if (hsp > 127.5) {
        return 'light';
      } else {
        return 'dark';
      }
    }
    if (currEl != null) {
      const currBgColor = window.getComputedStyle(currEl, null).getPropertyValue('background-color');
      accStyle = evalColor(currBgColor);
    }
    
    return (
      <div>
        <div className="head-container">
          <div className="title">Alex Ferrante</div>
        </div>
        <div className="info-container def-container">
          <h2>hhhhh</h2>
          <h2>hhhhh</h2>
          <h2>hhhhh</h2>  
          <h2>hhhhh</h2>
          <h2>hhhhh</h2>
          <h2>hhhhh</h2> 
          <h2>hhhhh</h2>
          <h2>hhhhh</h2>
          <h2>hhhhh</h2> 
          <h2>hhhhh</h2>
          <h2>hhhhh</h2>
          <h2>hhhhh</h2> 
          <h2>hhhhh</h2>
          <h2>hhhhh</h2>
          <h2>hhhhh</h2> 
          <h2>hhhhh</h2>
          <h2>hhhhh</h2>
          <h2>hhhhh</h2> 
          <h2>hhhhh</h2>
          <h2>hhhhh</h2>
          <h2>hhhhh</h2> 
        </div>
        <div className="main-container def-container">
            <Progress strokeWidth='7' sqSize='80' percentage={this.state.scrolled} styleType={accStyle}/>
            <div id='About' className='default-section'>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div id='Experience' className='default-section'>
              <div style = {{width: '50%', padding: 0, margin: 0}}>
              </div>
              <div style = {{width: '50%', float: 'right'}}>
              </div>
            </div>
            <div id='Interests' className='default-section'>
            </div>
           </div>
          </div>
       
    );
  }
}
