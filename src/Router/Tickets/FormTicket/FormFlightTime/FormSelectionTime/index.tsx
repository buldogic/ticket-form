
import cn from 'classnames'

import style from './style.module.css'

type Props ={
  onClick:React.MouseEventHandler<HTMLDivElement> 
  isSelected: boolean
  text: string
}

export const FormSelectionTime = (props:Props) => {
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
