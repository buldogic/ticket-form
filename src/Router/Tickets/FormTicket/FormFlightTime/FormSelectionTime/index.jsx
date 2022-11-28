import React, { useState } from 'react'
import cn from 'classnames'
import style from './style.module.css'

export const FormSelectionTime = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={cn(
        style.time,
        props.isSelected && style.timeActive
      )}
    >
      {props.text}
    </div>
  )
}
