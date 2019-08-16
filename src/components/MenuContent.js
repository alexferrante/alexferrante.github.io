import React from 'react'
import s from '../styles/menu.style'
import '../styles/menu.scss'

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navs: [{
        text: '',
        link: '',
        icon: ''
      }, {
        text: '',
        link: '',
        icon: ''
      }, {
        text: '',
        link: '',
        icon: ''
      }]
    }
  }

  render() {
    let navLinks = this.state.navs.map((link, i) => <li ref={i + 1}>
      <i aria-hidden="true"></i><a href={link.link} target=
      "_blank">{link.text}</a></li>);

    return (
      <div className={this.props.menuStatus} id="linksContainer">
        <ul>
          { navLinks }
        </ul>
      </div>
    )
  }   
}

export default MenuContent
  