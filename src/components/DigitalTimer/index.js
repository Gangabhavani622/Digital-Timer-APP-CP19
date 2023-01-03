// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: '00', isStart: false}

  render() {
    const {minutes, seconds, isStart} = this.state
    const iconUrl = isStart
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const iconText = isStart ? 'Pause' : 'Start'
    const altText = isStart ? 'pause icon' : 'play icon'
    return (
      <div className="app-cont">
        <h1>Digital Timer</h1>
        <div className="sub-cont">
          <div className="timer-background">
            <div className="timer-cont">
              <h1>
                {minutes} : {seconds}
              </h1>
              <p>Paused</p>
            </div>
          </div>
          <div className="icon-cont">
            <div className="operation-cont">
              <img src={iconUrl} alt={altText} className="icon" />
              <h1>{iconText}</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="icon"
              />
              <h1>Reset</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
