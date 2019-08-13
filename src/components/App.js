import React from 'react'
import { Waypoint } from 'react-waypoint'
import s from '../styles/app.style'
import Splash from './Splash'
import Menu from './Menu'

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
          <Menu></Menu>
          <div style={s.main}>
            <div style={s.title}>aaaaaa</div>
            <div>To embed your selected fonts into a webpage, copy this code into the of your HTML document.</div>
          </div>
        </div>
        }
      </Waypoint>
    )
  }
}

export default App;