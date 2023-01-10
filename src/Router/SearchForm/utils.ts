import { isValid, parse, differenceInCalendarDays } from 'date-fns'

const CITIES = new Set([
  'москва',
  'саратов',
  'санкт-петербург',
  'екатеринбург',
  'волгоград',
  'пермь',
  'уфа',
  'орск',
  'казань',
  'воронеж',
])

// const date = new Date()

export const checkIsCorrectCity = (name: string) => {
  const normalizedName = name.toLowerCase()
  const isCorrectCity = CITIES.has(normalizedName)
  return isCorrectCity
}

export const checkIsCorrectDate = (dateStr: string) => {
  const now = new Date()
  const date = parse(dateStr, 'dd.MM.yyyy', now)
  if (!isValid(date)) return false
  const diffInDays = differenceInCalendarDays(date, now)
  return diffInDays >= 0
}

// checkIsCorrectCity('москва') -> true
// checkIsCorrectCity('Москва') -> true
// checkIsCorrectCity('МОСКВА') -> true
// checkIsCorrectCity('МаСКВА') -> false
