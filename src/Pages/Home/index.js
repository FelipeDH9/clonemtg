import { useState, useEffect } from 'react'
// import NoCards from '../../components/NoCards'
import { getCards } from '../../services/magic/index'
import { FaSearch } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'

import './styles.css'

function Home() {
  const [currentCards, setCurrentCards] = useState()
  const [cardName, setCardName] = useState()
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 15

  async function fetchData() {
    const { data } = await getCards({ name: cardName })
    if (data) {
      const dataArray = await data.cards
      console.log('ARRAY ==', dataArray)
      const sortedCards = await dataArray.sort((a, b) =>
        a.name.localeCompare(b.name)
      )
      setCurrentCards(sortedCards)
    }
  }

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % currentCards.length
    setItemOffset(newOffset)
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(currentCards?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(currentCards?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, currentCards])

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
          <FaSearch />
        </button>
      </div>

      <table id="cardList">
        <tbody>
          {currentItems?.map(card => {
            return (
              <tr key={card.id}>
                <td className="card-name">
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
      {/* <table id="cardList">
        <tbody>
          {currentItems?.map(card => {
            return (
              <tr>
                {card.imageUrl && (
                  <tr>
                    <td>
                      <a href={`/card/${card.id}`} className="tooltip">
                        {card.name}
                        <img
                          className="tooltipimage"
                          src={card.imageUrl}
                          alt={card.name}
                        ></img>
                      </a>
                    </td>
                    <td>{card.setName}</td>
                  </tr>
                )}
              </tr>
            )
          })}
        </tbody>
      </table> */}
      {currentItems && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      )}
    </div>
  )
}

export default Home
