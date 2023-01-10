import { FromButton } from '../FormButton'
import { FormBaggage } from '../FormTicket/FormBaggage'
import { FromBlockPriceTwo } from '../FormTicket/FormBlockPrice'
import { BlockFormTime } from '../FormTicket/FormFlightTime/BlockFromTime'
import { FormLogo } from '../FormTicket/FormLogo'
import line from './line.svg'
import style from './style.module.css'

const TIME_FROM = '9:20'
const TIME_TO = '11:05'

const TICKET_TO_TIME = { from: TIME_FROM, to: TIME_TO }
const TICKET_BACK_TIME = { from: TIME_TO, to: TIME_FROM }

type Props = {
  cityFrom: string
  cityTo: string
  dateFrom: string
  dateTo: string
}

export function FormTicketTo(props: Props) {
  return (
    <>
      <div>
        <div className={style.globalTicket}>
          <div className={style.containerTicket}>
            <div className={style.ticket}>
              <div className={style.ticketUp}>
                {' '}
                <FormLogo />
                <div className={style.time}>
                  {' '}
                  <BlockFormTime
                    time={TICKET_TO_TIME}
                    cityFrom={props.cityFrom}
                    cityTo={props.cityTo}
                    dateFrom={props.dateFrom}
                  />
                </div>
                <div className={style.baggage}>
                  <FormBaggage />
                </div>
              </div>
              <div className={style.blockLine}>
                <img className={style.line} src={line} alt="img" />
              </div>
              <div className={style.ticketDown}>
                {' '}
                <FormLogo />
                <div className={style.time}>
                  {' '}
                  <BlockFormTime
                    time={TICKET_BACK_TIME}
                    cityFrom={props.cityTo}
                    cityTo={props.cityFrom}
                    dateFrom={props.dateTo}
                  />
                </div>
                <div className={style.baggage}>
                  <FormBaggage />
                </div>
              </div>
            </div>
            <div className={style.price}>
              <FromBlockPriceTwo />
            </div>
          </div>
        </div>
      </div>
      <div className={style.button}>
        <FromButton />
      </div>
    </>
  )
}
