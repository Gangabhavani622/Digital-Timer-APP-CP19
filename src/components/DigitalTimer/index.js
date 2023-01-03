// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {limitMinutes: 25, seconds: 0, isStart: false}

  onStartOrPauseBtn=()=>{
      const{isStart}=this.state
       if(isStart){
           
       }
  }

  render() {
    const {limitMinutes, seconds, isStart} = this.state
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
                {limitMinutes} : {seconds}
              </h1>
              <p>Paused</p>
            </div>
          </div>
          <div className="icon-cont">
            <div className="operation-cont">
              <button type="button" className="timer-limit-cont">
                {' '}
                <img src={iconUrl} alt={altText} className="icon" />
              </button>

              <h1>{iconText}</h1>
              <button type="button" className="timer-limit-cont">
                {' '}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="icon"
                />
              </button>

              <h1>Reset</h1>
            </div>
            <h1>Set Limit</h1>
            <div className="increment-decrement-cont">
              <button type="button" className="sign">
                -
              </button>
              <div className="limit-cont">{limitMinutes}</div>
              <button type="button" className="sign">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
