import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import { useState, useEffect } from 'react'
import './styles.css'

function LifeCount() {
  const [myLife, setMyLife] = useState(20)
  const [myRegister, setMyRegister] = useState([20])
  const [myLifeChange, setMyLifeChange] = useState([])

  const [hisLife, setHisLife] = useState(20)
  const [hisRegister, setHisRegister] = useState([20])
  const [hisLifeChange, setHisLifeChange] = useState([])

  function changeMyLife(value) {
    const myNewLife = parseInt(myLife) + parseInt(value)

    setMyRegister(e => [...e, { myNewLife }])
    console.log('myRegister', myRegister)

    setMyLife(eval(myNewLife))
    setMyLifeChange(n => [...n, { value }])
    console.log('myLifeChange', myLifeChange)
  }

  function changeHisLife(value) {
    const hisNewLife = parseInt(hisLife) + parseInt(value)

    setHisRegister(e => [...e, { hisNewLife }])
    console.log('hisRegister', hisRegister)

    setHisLife(eval(hisNewLife))
    setHisLifeChange(n => [...n, { value }])
    console.log('hisLifeChange', hisLifeChange)
  }

  useEffect(() => {}, [])

  return (
    <div className="container2">
      <div className="lifeBlock">
        <div className="lifeRegister">
          <div>
            {myLifeChange?.map(e => (
              <p>{e.value}</p>
            ))}
          </div>
          <div>
            {myRegister?.map(e => (
              <p>{e.myNewLife}</p>
            ))}
          </div>
        </div>
        <div className="lifeAndButtons">
          <p className="life">{myLife}</p>
          <div className="buttons-wrapper">
            <button
              className="btn+1"
              value={+1}
              onClick={event => changeMyLife(event.target.value)}
            >
              +1
            </button>
            <button
              className="btn-1"
              value={-1}
              onClick={event => changeMyLife(event.target.value)}
            >
              -1
            </button>
            <button
              value={+3}
              className="btn+3"
              onClick={event => changeMyLife(event.target.value)}
            >
              +3
            </button>
            <button
              value={-3}
              className="btn-3"
              onClick={event => changeMyLife(event.target.value)}
            >
              -3
            </button>
          </div>
        </div>
      </div>

      <div className="lifeBlock">
        <div className="lifeRegister">
          <div>
            {hisLifeChange?.map(e => (
              <p>{e.value}</p>
            ))}
          </div>
          <div>
            {hisRegister?.map(e => (
              <p>{e.hisNewLife}</p>
            ))}
          </div>
        </div>
        <div className="lifeAndButtons">
          <p className="life">{hisLife}</p>
          <div className="buttons-wrapper">
            <button
              className="btn+1"
              value={+1}
              onClick={event => changeHisLife(event.target.value)}
            >
              +1
            </button>
            <button
              className="btn-1"
              value={-1}
              onClick={event => changeHisLife(event.target.value)}
            >
              -1
            </button>
            <button
              value={+3}
              className="btn+3"
              onClick={event => changeHisLife(event.target.value)}
            >
              +3
            </button>
            <button
              value={-3}
              className="btn-3"
              onClick={event => changeHisLife(event.target.value)}
            >
              -3
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeCount
