import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { FormTicket } from './FormTicket'
import { FormTicketTo } from './FormTicketTo'
import style from './styles.module.css'

export function Tickets() {
  const [searchParams] = useSearchParams()
  const cityFrom = searchParams.get('cityFrom')
  const cityTo = searchParams.get('cityTo')
  const dateFrom = searchParams.get('dateFrom')
  const dateTo = searchParams.get('dateTo')

  return (
    <div className={style.ticket}>
      {dateTo === null ? (
        <FormTicket cityFrom={cityFrom} cityTo={cityTo} dateFrom={dateFrom} />
      ) : (
        <FormTicketTo cityFrom={cityFrom} cityTo={cityTo} dateFrom={dateFrom} dateTo={dateTo}  />
      )}
    </div>
  )
}
