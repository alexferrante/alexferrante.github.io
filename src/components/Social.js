import React from 'react'
import s from '../styles/app.style'
import '../styles/menu.scss'
import gitIcon from '../styles/assets/github.svg'
import linkedIcon from '../styles/assets/linkedin.svg'


class Social extends React.Component {

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
      <div ref="root" id="socialWrapper" style={this.state.isToggled ? s.social : s.social}>
        <div className="socialContainer"></div>
      </div>
    );
  }
}

export default Social