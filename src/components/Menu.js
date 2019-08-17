import React from 'react'
import { device } from '../styles/util/const'
import s from '../styles/menu.style'
import '../styles/menu.scss'
import MenuContent from './MenuContent'


class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
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
    let toggleStatus = this.state.isToggled ? 'open' : '';

    return (
      <div ref="root" style={s.menu}>
        <div className="menuContainer">
          <div id="slideMenu" className={toggleStatus}><span style={s.toggler}onClick={this._toggleMenu}></span></div>
        </div>
        <MenuContent></MenuContent>

      </div>
    );
  }
}

export default Menu