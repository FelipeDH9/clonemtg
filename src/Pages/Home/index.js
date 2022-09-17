import './styles.css'

// axios
import { getCards } from '../../services/magic/index'

import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

// components
import Loading from '../../components/Loading'

// hooks
import { useState, useEffect, useContext } from 'react'
import useWindowDimensions from '../../hooks/useWindowResize'
import { SearchContext } from '../../context/SearchContext'

function Home() {
  const [currentCards, setCurrentCards] = useState()
  const { width } = useWindowDimensions()
  const [loading, setLoading] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const pageSize = 24

  const { cardName, setCardName } = useContext(SearchContext)

  const fetchData = async (currentPage = 1) => {
    setLoading(true)
    const { data, headers } = await getCards({
      name: cardName,
      contains: 'imageUrl',
      pageSize,
      page: currentPage
    })
    setLoading(false)

    if (data) {
      const cards = await data.cards
      const totalCount = headers['total-count'] || 0
      setPageCount(Math.ceil(totalCount / pageSize))
      setCurrentCards(cards)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchData()
  }

  const handlePageClick = async event => {
    await fetchData(event.selected + 1)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="body-home">
      <h3>Pesquisa</h3>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Digite o nome da carta..."
            autoFocus="autofocus"
            onChange={value => setCardName(value.target.value)}
          ></input>
          <div className="button-wrapper">
            {loading ? (
              <input
                type="submit"
                value="Aguarde"
                disabled
                className="button"
              />
            ) : (
              <input type="submit" value="Buscar" className="button" />
            )}
          </div>
        </form>
      </div>

      {/* responsive list */}
      {width <= 767 ? (
        <div className="cards-image-list">
          {!loading ? (
            <div className="flex-wrapper">
              {currentCards?.map(card => (
                <Link to={`/card/${card.id}`} key={card.id}>
                  <img
                    src={card.imageUrl}
                    alt="card"
                    className="card-image"
                  ></img>
                </Link>
              ))}
            </div>
          ) : (
            <div
              style={{
                width: '100%',
                height: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Loading />
            </div>
          )}
        </div>
      ) : (
        <table id="card-table-list">
          <tbody>
            {!loading ? (
              currentCards?.map(card => (
                <tr key={card.id}>
                  <td className="card-name">
                    {card.imageUrl ? (
                      <Link to={`/card/${card.id}`} className="tooltip">
                        {card.name}
                        <img
                          className="tooltipimage"
                          src={card.imageUrl}
                          alt="card"
                        ></img>
                      </Link>
                    ) : (
                      <p>{card.name}</p>
                    )}
                  </td>
                  <td>{card.setName}</td>
                </tr>
              ))
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '50vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Loading />
              </div>
            )}
          </tbody>
        </table>
      )}
      {currentCards && (
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
          activeLinkClassName="pag-active"
        />
      )}
    </div>
  )
}

export default Home
