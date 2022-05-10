import { useState, useEffect } from 'react'
import NoCards from '../../components/NoCards'
import { getCards } from '../../services/magic/index'
import './styles.css'

function Home() {
  const [allCards, setAllCards] = useState()
  const [currentCard, setCurrentCard] = useState()
  const [noCards, setNoCards] = useState(false)

  async function fetchData() {
    //função que busca cartas pelos serviços de api do magic.assets
    const { data } = await getCards() //busca a API pela URL
    if (data) {
      setAllCards(data.cards) //armazena o data.cards no estado allCards (), pois queremos a propriedade cards que esta em data
    }
  }

  const fullCurrentCards = () => {
    setCurrentCard(allCards)
    setNoCards(false)
    console.log(allCards)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="buttons-nav">
        <button className="button" onClick={fullCurrentCards}>
          Mostrar todas as cartas
        </button>
      </div>

      <h3>Pesquisa</h3>
      {noCards && <NoCards />}
      {!noCards && (
        <table id="cardList">
          <tbody>
            <tr>
              <th>Carta</th>
              <th>Custo de mana</th>
              <th>Tipo</th>
              <th>Texto</th>
              <th>Poder / Resistência</th>
            </tr>
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
                  <td>{card.manaCost}</td>
                  <td>{card.type}</td>
                  <td>{card.text}</td>
                  {card.power ? (
                    <td>
                      {card.power}/{card.toughness}
                    </td>
                  ) : (
                    <td>Não possui</td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home
