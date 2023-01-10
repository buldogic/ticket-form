import './style.css'
import bagPath from './bag.svg'
import baggagePath from './baggage.svg'

export function FormBaggage() {
  return (
    <div className="blockFormBaggage">
      <img className="imgBag" src={bagPath} />
      <img className="imgBaggage" src={baggagePath} />
    </div>
  )
}
