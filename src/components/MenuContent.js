import React from 'react'
import s from '../styles/app.style'
import '../styles/menu.scss'
import Projects from './Projects'
import Experience from './Experience'
import { HashLink as Link } from 'react-router-hash-link'

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navs: [{
        text: 'Projects',
        link: '',
        icon: ''
      }, {
        text: 'Experience',
        link: '',
        icon: ''
      }]
    }
  }

  render() {
    return (
      <div className={this.props.toggleStatus} id="linksContainer">
        <li>
        <Link to="#projects">Projects</Link>
        </li>
        <li>
        <Link to="#experience">Experience</Link>
        </li>
      </div>
    )
  }   
}

export default MenuContent
  