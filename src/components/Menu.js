import React from 'react';
import { device } from '../styles/util/const';
import s from '../styles/app.style'

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  handleEntry = () => {
  
  }

  handleExit = () => {

  }

  render() {
    return (
      <div style={s.menu} onMouseEnter={this.handleEntry} onMouseLeave={this.handleExit}>
      </div>
    );
  }
}

export default Menu