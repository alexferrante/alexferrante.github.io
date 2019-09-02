import React from 'react'
import s from '../styles/app.style'
import '../styles/menu.scss'
import { NavLink, Route } from 'react-router-dom'
import Projects from './Projects'
import Experience from './Experience'

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navs: [{
        text: 'Projects',
        link: '',
        component: {Projects},
        icon: ''
      }, {
        text: 'Experience',
        link: '',
        component: {Experience},
        icon: ''
      }]
    }
  }

  render() {
    return (
      <div className={this.props.toggleStatus} id="linksContainer">
        <li>
        <NavLink exact to="/Projects">Projects</NavLink>
        </li>
        <li>
        <NavLink exact to="/Experience">Experience</NavLink>
        </li>
        <div id="content">
        <Route exact path to='/Projects' component={Projects}/>
        <Route exact path to='/Experience' component={Experience}/>
        </div>
      </div>
    )
  }   
}

export default MenuContent
  