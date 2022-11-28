import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { SearchForm } from './SearchForm'
import { Tickets } from './Tickets'
import { ROUTES } from '../config/routes'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.search} element={<SearchForm />} />
        <Route path={ROUTES.results} element={<Tickets />} />
        <Route path="*" element={<Navigate to={ROUTES.search} />} />
      </Routes>
    </BrowserRouter>
  )
}
