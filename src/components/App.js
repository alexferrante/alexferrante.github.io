import React from 'react'
import s from '../styles/app.style'
import Splash from './Splash'
import Menu from './Menu'
import Social from './Social'
import Music from './Music'
import MenuContent from './MenuContent'
import Experience from './Experience'
import Projects from './Projects'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
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
      <div>
        {!this.state.timePassed ? <Splash></Splash> :
        <div>
          <Social></Social>
          <Menu></Menu>
          <Experience></Experience>
          <Projects></Projects>
        </div>
        }
      </div>
    )
  }
}

export default App;