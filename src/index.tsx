import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './Router'

const element = document.getElementById('root')
if (element !== null) {
  const root = ReactDOM.createRoot(element)

  root.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  )
}
