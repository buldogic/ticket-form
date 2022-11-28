import React, { useState } from 'react'
import { BlockFormTime } from './BlockFromTime'
import { FormSelectionTime } from './FormSelectionTime'
import style from './style.module.css'

const TIMES = [
  { from: '9:20', to: '11:05' },
  { from: '10:20', to: '12:05' },
  { from: '11:20', to: '13:05' },
]

export function FormFlightTime(props) {
  const [value, setValue] = useState(0)

  const items = TIMES.map((time, i) => {
    return (
      <FormSelectionTime
        key={i}
        isSelected={value === i}
        onClick={() => setValue(i)}
        text={`${time.from} - ${time.to}`}
      />
    )
  })

  const selectedTime = TIMES[value]

  return (
    <div className={style.BlockFormTime}>
      <BlockFormTime time={selectedTime} cityFrom={props.cityFrom} cityTo={props.cityTo} dateFrom={props.dateFrom}  />
      <div className={style.blockFlightTime}>{items}</div>
    </div>
  )
}
