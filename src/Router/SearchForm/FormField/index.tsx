import React, { useState } from 'react'
import calendarIconPath from './calendar-icon.svg'
import cn from 'classnames'
import calendarIconBlackPath from './calendar-icon-black.svg'
import style from './style.module.css'

type Props = {
  title: string
  value: string
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  showIcon?: boolean
  isError?: boolean
}
export const FormField = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={style.blok}>
      <label className={style.text}>{props.title}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        className={cn(
          style.departureFrom,
          props.showIcon && style.withIcon,
          props.isError && style.isError
        )}
        placeholder={props.placeholder}
        onBlur={() => {
          setIsFocused(false)
        }}
        onFocus={() => {
          setIsFocused(true)
        }}
      />

      {props.showIcon && (
        <img
        alt='img'
          className={style.calendarIcon}
          src={isFocused ? calendarIconPath : calendarIconBlackPath}
        />
      )}
    </div>
  )
}
