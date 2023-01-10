
import { FormLogo } from './FormLogo'
import { FormFlightTime } from './FormFlightTime'
import { FormBaggage } from './FormBaggage'
import { FromBlockPrice } from './FormBlockPrice'
import style from './style.module.css'
import { FromButton } from '../FormButton'

type Props = {
  cityFrom: string
  cityTo: string
  dateFrom: string
}

export function FormTicket(props: Props) {
  return (
    <>
      <div className={style.globalTicket}>
        <div className={style.containerTicket}>
          <div>
            {' '}
            <FormLogo />
          </div>
          <div>
            {' '}
            <FormFlightTime
              cityFrom={props.cityFrom}
              cityTo={props.cityTo}
              dateFrom={props.dateFrom}
            />
          </div>
          <div className={style.baggage}>
            <FormBaggage />
          </div>

          <div className={style.blockPrice}>
            {' '}
            <FromBlockPrice />
          </div>
        </div>
      </div>
      <div className={style.button}>
        <FromButton  />
      </div>
    </>
  )
}
