import React from 'react'
import { Waypoint } from 'react-waypoint'
import s from '../styles/app.style'

export default function App() {
  return (
      <Waypoint>
        <div style={s.root}>
        <div style={s.title}>Alex</div>
        <div>To embed your selected fonts into a webpage, copy this code into the of your HTML document.</div>
      </div>
      </Waypoint>

  );
}