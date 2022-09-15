import { useState } from 'react'
import './styles.css'

function LifeCount() {
  const [myLife, setMyLife] = useState(20)
  const [myRegister, setMyRegister] = useState([20])

  const [hisLife, setHisLife] = useState(20)
  const [hisRegister, setHisRegister] = useState([20])

  const [stormCount, setStormCount] = useState(0)

  function handleMyLife(value) {
    const myNewLife = parseInt(myLife) + parseInt(value)
    const myOldLife = myLife

    setMyRegister(e => [...e, { myOldLife, value, myNewLife }])

    setMyLife(eval(myNewLife))
  }

  function handleHisLife(value) {
    const hisNewLife = parseInt(hisLife) + parseInt(value)
    const hisOldLife = hisLife

    setHisRegister(e => [...e, { hisOldLife, value, hisNewLife }])

    setHisLife(eval(hisNewLife))
  }

  return (
    <div className="container">
      <div className="life-block">
        <div className="life-register">
          <table className="life-table">
            <tbody>
              {hisRegister?.map((e, i) => (
                <tr key={i}>
                  <td>
                    {e.value >= 0 ? (
                      <p style={{ color: '#8af34d' }}>+{e.value}</p>
                    ) : (
                      <p style={{ color: '#eb5555' }}>{e.value}</p>
                    )}
                  </td>
                  <td>{e.hisNewLife}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="life-buttons">
          <p className="life">{hisLife}</p>
          <div className="buttons-wrapper">
            <button
              className="btnPlus1 btnPlus"
              value={+1}
              onClick={event => handleHisLife(event.target.value)}
            >
              +1
            </button>
            <button
              className="btnMinus1 btnMinus"
              value={-1}
              onClick={event => handleHisLife(event.target.value)}
            >
              -1
            </button>
            <button
              className="btnPlus2 btnPlus"
              value={+2}
              onClick={event => handleHisLife(event.target.value)}
            >
              +2
            </button>
            <button
              className="btnMinus2 btnMinus"
              value={-2}
              onClick={event => handleHisLife(event.target.value)}
            >
              -2
            </button>
            <button
              value={+3}
              className="btnPlus3 btnPlus"
              onClick={event => handleHisLife(event.target.value)}
            >
              +3
            </button>
            <button
              value={-3}
              className="btnMinus3 btnMinus"
              onClick={event => handleHisLife(event.target.value)}
            >
              -3
            </button>
          </div>
        </div>
      </div>

      <div className="life-block">
        <div className="life-register">
          <table className="life-table">
            <tbody>
              {myRegister?.map((e, i) => (
                <tr key={i}>
                  <td>
                    {e.value >= 0 ? (
                      <p style={{ color: '#8af34d' }}>+{e.value}</p>
                    ) : (
                      <p style={{ color: '#eb5555' }}>{e.value}</p>
                    )}
                  </td>
                  <td>{e.myNewLife}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="life-buttons">
          <p className="life">{myLife}</p>
          <div className="buttons-wrapper">
            <button
              className="btnPlus1 btnPlus"
              value={+1}
              onClick={event => handleMyLife(event.target.value)}
            >
              +1
            </button>
            <button
              className="btnMinus1 btnMinus"
              value={-1}
              onClick={event => handleMyLife(event.target.value)}
            >
              -1
            </button>
            <button
              className="btnPlus2 btnPlus"
              value={+2}
              onClick={event => handleMyLife(event.target.value)}
            >
              +2
            </button>
            <button
              className="btnMinus2 btnMinus"
              value={-2}
              onClick={event => handleMyLife(event.target.value)}
            >
              -2
            </button>
            <button
              value={+3}
              className="btnPlus3 btnPlus"
              onClick={event => handleMyLife(event.target.value)}
            >
              +3
            </button>
            <button
              value={-3}
              className="btnMinus3 btnMinus"
              onClick={event => handleMyLife(event.target.value)}
            >
              -3
            </button>
          </div>
        </div>
      </div>
      <div className="storm-block">
        <p>Storm </p>
        <button
          onClick={() => {
            setStormCount(0)
          }}
        >
          0
        </button>
        <p>{stormCount}</p>
        <button
          onClick={() => {
            setStormCount(stormCount + 1)
          }}
        >
          +1
        </button>
      </div>
    </div>
  )
}

export default LifeCount
