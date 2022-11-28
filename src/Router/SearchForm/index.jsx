import React, { useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import { checkIsCorrectDate, checkIsCorrectCity } from './utils'
import { FormField } from './FormField'

import style from './styles.module.css'

export function SearchForm() {
  const [cityFrom, setCityFrom] = useState('')
  const [cityTo, setCityTo] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const navigate = useNavigate()

  const isErrorCityFrom = !checkIsCorrectCity(cityFrom)
  const isErrorCityTo = !checkIsCorrectCity(cityTo)
  const isErrorDateFrom = !checkIsCorrectDate(dateFrom)
  const isErrorDateTo = dateTo.length > 0 ? !checkIsCorrectDate(dateTo) : false

  const isFormValid =
    !isErrorCityFrom && !isErrorCityTo && !isErrorDateFrom && !isErrorDateTo

  return (
    <div className={style.globalContainer}>
      <div className={style.container}>
        {' '}
        <div className={style.menuHeaderUp}>
          <FormField
            value={cityFrom}
            onChange={(e) => setCityFrom(e.target.value)}
            title="Откуда"
            placeholder="Город вылета"
            isError={cityFrom.length > 0 ? isErrorCityFrom : false}
          />
          <FormField
            value={cityTo}
            onChange={(e) => setCityTo(e.target.value)}
            title="Куда"
            placeholder="Город прилёта"
            isError={cityTo.length > 0 ? isErrorCityTo : false}
          />
          <FormField
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            title="Дата вылета"
            placeholder="дд.мм.гг"
            showIcon
            isError={dateFrom.length > 0 ? isErrorDateFrom : false}
          />
          <FormField
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            title="Дата прилёта"
            placeholder="дд.мм.гг"
            showIcon
            isError={isErrorDateTo}
          />
        </div>
        <div className={style.menuHeaderDown}>
          {' '}
          <button
            disabled={!isFormValid}
            className={style.button}
            onClick={() => {
              const searchParams = createSearchParams({
                cityFrom,
                cityTo,
                dateFrom,
                ...(dateTo.length ? { dateTo } : {}),
              })
              navigate(`${ROUTES.results}?${searchParams}`)
            }}
          >
            Найти билет
          </button>
        </div>
      </div>
    </div>
  )
}
