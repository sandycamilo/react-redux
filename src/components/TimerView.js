import React, { } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTimer, toggleTimer } from '../actions'
import { formatTime } from '../utils';
import './TimerView.css'
import Drawing from './Drawing';


export default function TimerView(props) {
  const { index, timer } = props
  const dispatch = useDispatch()
  return (
      <div className="allViews">
          <div className="TimerView">
          <h2>{timer.name}</h2>
          <h1>{formatTime(timer.time)}</h1>
          <button
            onClick={() => dispatch(toggleTimer(index))}
          >
            {timer.isRunning ? "stop" : "start"}
          </button>
          <button
            onClick={() => dispatch(deleteTimer(index))}
          >
            delete
          </button>
          <Drawing index={index} time={timer.time}/>
        </div>
      </div>
  )
}