import React from 'react';

import '../../styles/main.scss'

export default class Progress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sqSize = this.props.sqSize;
        const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * this.props.percentage / 100;
        const isLight = this.props.styleType === 'light';
      
        return (
          <div className="progress-btn">
            { this.props.percentage > 5 ? (
            
            <svg
              width={this.props.sqSize}
              height={this.props.sqSize}
              viewBox={viewBox}>
              <circle
                className='progress-bg'
                cx={this.props.sqSize / 2}
                cy={this.props.sqSize / 2}
                r={radius}
                strokeWidth={`${this.props.strokeWidth}px`} />
              <circle
                className="progress-pg"
                stroke={isLight ? 'red' : 'blue'}
                cx={this.props.sqSize / 2}
                cy={this.props.sqSize / 2}
                r={radius}
                strokeWidth={`${this.props.strokeWidth}px`}
              
                transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
                style={{
                  strokeDasharray: dashArray,
                  strokeDashoffset: dashOffset
                }} />
          </svg>
          )  
          : <div></div>}

          </div>
         
          
        );
    }
}

