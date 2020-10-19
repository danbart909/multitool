import React, { Component } from 'react'
import Timer from 'react-compound-timer'

export default class Clock extends Component {
  render() {
    return (
      <div id='clock-container'>

        <div id='worldclock-container'>
          <span>worldclock</span>
        </div>

        <div id='stopwatch-container'>

          <Timer
            initialTime={0}
            startImmediately={false}
          >
            {({ start, pause, reset, timerState }) => (
              <>
                <div id='stopwatch'>
                  <div><Timer.Days /> days</div>
                  <div><Timer.Hours /> hours</div>
                  <div><Timer.Minutes /> minutes</div>
                  <div><Timer.Seconds /> seconds</div>
                  <div><Timer.Milliseconds /> milliseconds</div>
                </div>
                <div id='stopwatch-state'>
                  {timerState}
                </div>
                <div id='stopwatch-buttons'>
                  <button onClick={start}>Start</button>
                  <button onClick={pause}>Pause</button>
                  <button onClick={reset}>Reset</button>
                </div>
              </>
            )}
          </Timer>

        </div>

        <div id='timer-container'>

          <Timer
            initialTime={0}
            startImmediately={false}
          >
            {({ start, pause, reset, timerState }) => (
              <>
                <div id='timer'>
                  <div><Timer.Days /> days</div>
                  <div><Timer.Hours /> hours</div>
                  <div><Timer.Minutes /> minutes</div>
                  <div><Timer.Seconds /> seconds</div>
                  <div><Timer.Milliseconds /> milliseconds</div>
                </div>
                <div id='timer-state'>
                  {timerState}
                </div>
                <div id='timer-buttons'>
                  <button onClick={start}>Start</button>
                  <button onClick={pause}>Pause</button>
                  <button onClick={reset}>Reset</button>
                </div>
              </>
            )}
          </Timer>

        </div>

      </div>
    )
  }
}