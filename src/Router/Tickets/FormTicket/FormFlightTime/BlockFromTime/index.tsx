import { Time } from '../../../../../../types'
import schemePath from './scheme.svg'
import style from './style.module.css'

function capitalize(str: string) {
  if (!str) return str
  return str[0].toUpperCase() + str.slice(1)
}

type Props = {
  cityFrom: string
  cityTo: string
  dateFrom: string
  time: Time
}

export function BlockFormTime(props: Props) {
  return (
    <div className={style.blockTime}>
      <div className={style.blockDepartureTime}>
        {' '}
        <h2 className={style.departureTime}>{props.time.from}</h2>
        <p className={style.departureCity}>{capitalize(props.cityFrom)}</p>
        <p className={style.departureData}>{props.dateFrom}</p>
      </div>
      <div className={style.blockSchemePath}>
        <img className={style.img} src={schemePath} alt='img' />
      </div>
      <div className={style.blockArrivalTime}>
        {' '}
        <h2 className={style.arrivalTime}>{props.time.to}</h2>
        <p className={style.arrivalCity}>{capitalize(props.cityTo)}</p>
        <p className={style.arrivalData}>{props.dateFrom}</p>
      </div>
    </div>
  )
}
