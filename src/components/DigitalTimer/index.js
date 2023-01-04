// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {limitMinutes: 25, timeElapsedInSeconds: 0, isTimerRunning: false}

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  incrementTimeElapsedInSeconds = () => {
    const {limitMinutes, timeElapsedInSeconds} = this.state
    const isTimerCompleted = timeElapsedInSeconds === limitMinutes * 60

    if (isTimerCompleted) {
      this.clearTimerInterval()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

  onClickStartOrPause = () => {
    const {isTimerRunning, timeElapsedInSeconds, limitMinutes} = this.state
    const isTimerCompleted = timeElapsedInSeconds === limitMinutes * 60

    if (isTimerCompleted) {
      this.setState({timeElapsedInSeconds: 0})
    }
    if (isTimerRunning) {
      this.clearTimerInterval()
    } else {
      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onDecrementTimer = () => {
    const {limitMinutes, isTimerRunning} = this.state
    if (limitMinutes > 1) {
      this.setState(prevState => ({limitMinutes: prevState.limitMinutes - 1}))
    }
  }

  onIncrementTimer = () => {
    this.setState(prevState => ({limitMinutes: prevState.limitMinutes + 1}))
  }

  onClickReset = () => {
    this.clearTimerInterval()
    this.setState({
      limitMinutes: 25,
      timeElapsedInSeconds: 0,
      isTimerRunning: false,
    })
  }

  getElapsedSecondsInTimeFormat = () => {
    const {limitMinutes, timeElapsedInSeconds} = this.state
    const totalRemainingSeconds = limitMinutes * 60 - timeElapsedInSeconds
    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {limitMinutes, isTimerRunning} = this.state
    const iconUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const iconText = isTimerRunning ? 'Pause' : 'Start'
    const altText = isTimerRunning ? 'pause icon' : 'play icon'
    const statusText = isTimerRunning ? 'Running' : 'Paused'
    return (
      <div className="app-cont">
        <h1>Digital Timer</h1>
        <div className="sub-cont">
          <div className="timer-background">
            <div className="timer-cont">
              <h1>{this.getElapsedSecondsInTimeFormat()}</h1>
              <p>{statusText}</p>
            </div>
          </div>
          <div className="icon-cont">
            <div className="operation-cont">
              <button
                type="button"
                className="timer-limit-cont"
                onClick={this.onClickStartOrPause}
              >
                {' '}
                <img src={iconUrl} alt={altText} className="icon" />
                <p>{iconText}</p>
              </button>

              <button
                type="button"
                className="timer-limit-cont"
                onClick={this.onClickReset}
              >
                {' '}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="icon"
                />
                <p>Reset</p>
              </button>
            </div>
            <p>Set Timer Limit </p>
            <div className="increment-decrement-cont">
              <button
                type="button"
                className="sign"
                onClick={this.onDecrementTimer}
              >
                -
              </button>
              <p className="limit-cont">{limitMinutes}</p>
              <button
                type="button"
                className="sign"
                onClick={this.onIncrementTimer}
              >
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
