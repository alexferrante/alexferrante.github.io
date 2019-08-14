import React from 'react';
import { device } from '../styles/util/const';
import s from '../styles/app.style'

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  handleEntry = () => {
    document.getElementById('menu').css(s.fullMenu);
    alert('h');
  }

  handleExit = () => {
    

  }

  handleClick = () => {
    

  }

  render() {
    return (
      <div id='menu' style={s.menu} onMouseEnter={this.handleEntry} onMouseLeave={this.handleExit} onClick={this.handleClick}>
      </div>
    );
  }
}

export default Menu