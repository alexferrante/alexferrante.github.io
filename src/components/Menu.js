import React from 'react'
import { device } from '../styles/util/const'
import s from '../styles/menu.style'
import '../styles/menu.scss'
import MenuContent from './MenuContent'


class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggled: true
    };
    this._toggleMenu = this._toggleMenu.bind(this);
    this._handleEntry = this._handleEntry.bind(this);
  }

  componentDidMount = () => {
    document.addEventListener('click', this._handleClick, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this._handleClick, false);
  }

  _toggleMenu = (e) => {
    e.stopPropagation();
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  _handleClick = (e) => {
    if (!this.refs.root.contains(e.target) && this.state.isToggled === true) {
      this.setState({
        isToggled: false
      });
    };
  }

  _handleEntry = () => {

  }

  render() {

    return (
      <div ref="root" id="wrapper" style={this.state.isToggled ? s.fullMenu : s.menu}>
        <div className="menuContainer" onClick={this._toggleMenu}>
        <MenuContent></MenuContent>
        </div>
      </div>
    );
  }
}

export default Menu