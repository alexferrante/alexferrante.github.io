import React from 'react'
import { Waypoint } from 'react-waypoint'
import s from '../styles/app.style'
import Splash from './Splash'
import Menu from './Menu'
import Social from './Social'
import Music from './Music'
import MenuContent from './MenuContent'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }

  handleEntry = () => {
    console.log('entered')
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 200);
  }

  setTimePassed() {
    this.setState({timePassed: true});
  } 

  render() {
    return (
      <Waypoint scrollableAncestor={window} onEnter={this.handleEntry}>
        {!this.state.timePassed ? <Splash></Splash> :
        <div>
          <Social></Social>
          <MenuContent></MenuContent>
        </div>
        }
      </Waypoint>
    )
  }
}

export default App;