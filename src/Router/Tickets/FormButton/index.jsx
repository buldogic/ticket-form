import React from 'react'
import { useNavigate} from 'react-router-dom'
import { ROUTES } from '../../../config/routes'
import style from './style.module.css'

export function FromButton() {
  const navigate = useNavigate()
  return (
    <button
      className={style.button}
      onClick={() => {
        navigate(ROUTES.search)
      }}
    >
      Главная страница
    </button>
  )
}
