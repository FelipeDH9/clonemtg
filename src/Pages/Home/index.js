import { useState, useEffect } from 'react'
// import NoCards from '../../components/NoCards'
import { getCards } from '../../services/magic/index'
import { GoSearch } from 'react-icons/go'

import './styles.css'

function Home() {
  const [currentCards, setCurrentCards] = useState()
  const [cardName, setCardName] = useState()

  async function fetchData() {
    const { data } = await getCards({ name: cardName })
    console.log('chamou', data)
    if (data) {
      const sortedCards = await data.cards.sort((a, b) =>
        a.name.localeCompare(b.name)
      )

      setCurrentCards(sortedCards)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="body-home">
      <h3>Pesquisa</h3>
      <div className="search">
        <input
          type="text"
          placeholder="Digite o nome da carta..."
          autoFocus="autofocus"
          onChange={value => setCardName(value.target.value)}
        ></input>

        <button className="button" onClick={() => fetchData()}>
          <GoSearch />
        </button>
      </div>

      <table id="cardList">
        <tbody>
          {currentCards?.map(card => {
            return (
              <>
                {card.imageUrl && (
                  <tr key={card.id}>
                    <td>
                      <a href={`/card/${card.id}`} className="tooltip">
                        {card.name}
                        <img
                          className="tooltipimage"
                          src={card.imageUrl}
                          alt="card"
                        ></img>
                      </a>
                    </td>
                    <td>{card.setName}</td>
                  </tr>
                )}
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
