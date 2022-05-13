import { useState, useEffect } from 'react'
// import NoCards from '../../components/NoCards'
import { getCards } from '../../services/magic/index'
import { GoSearch } from 'react-icons/go'

import './styles.css'

function Home() {
  const [allCards, setAllCards] = useState()
  const [currentCard, setCurrentCard] = useState()
  const [cardName, setCardName] = useState()
  // const [noCards, setNoCards] = useState(false)

  async function fetchData() {
    //função que busca cartas pelos serviços de api do magic.assets
    const { data } = await getCards({ name: cardName }) //busca a API pela URL
    console.log('chamou', data)
    if (data) {
      setAllCards(data.cards) //armazena o data.cards no estado allCards (), pois queremos a propriedade cards que esta em data
      setCurrentCard(data.cards)
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
          onSubmit={() => fetchData()}
        ></input>

        <button className="button" onClick={() => fetchData()}>
          <GoSearch />
        </button>
      </div>

      <table id="cardList">
        <tbody>
          {currentCard?.map(card => {
            return (
              <tr key={card.id}>
                <td>
                  {card.imageUrl ? (
                    <a href={`/card/${card.id}`} className="tooltip">
                      {card.name}
                      <img
                        className="tooltipimage"
                        src={card.imageUrl}
                        alt="card"
                      ></img>
                    </a>
                  ) : (
                    <p>{card.name}</p>
                  )}
                </td>
                <td>{card.setName}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
