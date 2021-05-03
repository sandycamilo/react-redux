import React from 'react'
import { useSelector } from 'react-redux'
import TimerView from './TimerView'

export default function ListTimers() {
  const timers = useSelector(state => state.timers)

  return (
    <div>
      {timers.map((timer, i) => {
        return (
          <TimerView
            key={`timer-${i}`}
            timer={timer}
            index={i}
          />
        )
      })}
    </div>
  )
}