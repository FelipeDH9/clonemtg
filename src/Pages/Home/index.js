import { useState, useEffect } from 'react'

import { GoSearch } from 'react-icons/go'
import NoCards from '../../components/NoCards'
// import Card from '../../components/Card'
// import CardModal from '../../components/CardModal'

import './styles.css'

function Home() {
  const [cardName, setCardName] = useState() //estado para armazenar o que foi digitado no input
  const [allCards, setAllCards] = useState() //estado para armazenar todas as cartas
  const [currentCard, setCurrentCard] = useState() //estado para filtrar cartas por nome
  const [noCards, setNoCards] = useState(false)
  // const [cardModal, setCardModal] = useState('')

  async function fetchData() {
    //função que busca cartas pela API
    const response = await fetch('https://api.magicthegathering.io/v1/cards') //busca a API pela URL
    const data = await response.json() //transforma a resposta da busca em data, que é um objeto que sua unica propriedade é um array de 100 cartas cards: [100]
    setAllCards(data.cards) //armazena o data.cards no estado allCards (), pois queremos a propriedade cards que esta em data
  }

  const cleanCurrentCards = () => {
    setCurrentCard([])
    setNoCards(true)
  }

  const fullCurrentCards = () => {
    setCurrentCard(allCards)
    setNoCards(false)
  }

  const filter = () => {
    if (!cardName) {
      return setNoCards(true)
    }
    if (cardName) {
      const filterCardByName = allCards.filter(
        card => card.name.toLowerCase() === cardName.toLowerCase()
      )
      return setNoCards(false), setCurrentCard(filterCardByName)
    }
  }

  useEffect(() => {
    //é feita a busca das cartas quando a página é recarregada
    fetchData()
  }, [])

  return (
    <div className="container">
      <header>
        <div className="header">
          <img
            src="https://assets1.mtggoldfish.com/assets/mtggoldfish-website-logo-0a6f6c08669df80f2a1dbc60d365bd090d712b5106927ad5cf7efc3e3449fcfe.png"
            alt="Logo"
          ></img>
          <div className="navBar">
            <input
              type="text"
              placeholder="Digite o nome da carta..."
              onChange={value => setCardName(value.target.value)}
              autoFocus="autofocus"
              onClick={value => (value.target.value = '')}
            ></input>

            <button onClick={filter}>
              <GoSearch />
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="buttons-nav">
          {/* <button className="button" onClick={cleanCurrentCards}>
            Ocultar cartas
          </button> */}
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
                      <a href={card.imageUrl} target="_blank" rel="noreferrer">
                        {card.name}
                      </a>
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
      </main>
      <div className="layout-bottom">
        <div className="layout-bottom-content">
          <h3>Final da página</h3>
        </div>
      </div>
      <div className="footer">
        <p>Site recriado com React JS para fins educativos.</p>
      </div>
    </div>
  )
}

export default Home
