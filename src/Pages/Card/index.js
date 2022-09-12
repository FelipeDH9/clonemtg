import './styles.css'

// hooks
import { useEffect, useState, useCallback } from 'react'

// router
import { useParams, Link } from 'react-router-dom'

// services
import { getCard } from '../../services/magic'

// components
import Skeleton from '../../components/Skeleton'

// icons
import { IoMdArrowBack } from 'react-icons/io'

function Card() {
  const { id } = useParams()
  const [cardById, setCardById] = useState()
  const [loading, setLoading] = useState(false)

  const getCardById = useCallback(async () => {
    setLoading(true)
    const res = await getCard(id)
    setLoading(false)
    const data = await res.data.card
    setCardById(data)
  }, [id])

  useEffect(() => {
    getCardById()
  }, [getCardById])

  return (
    <div>
      {!loading ? (
        <div>
          <div className="titles">
            <Link to="/">
              <IoMdArrowBack id="return-icon" />
            </Link>
            <h3 id="card-name">{cardById?.name}</h3>
            <h3>{cardById?.setName}</h3>
          </div>
          <div className="card-info">
            <div className="card-image-butons">
              <img src={cardById?.imageUrl} alt="card" />
            </div>
            <div className="card-info-box">
              <div className="info-box">
                <div className="name-cost">
                  <h3>{cardById?.name}</h3>
                  <span>{cardById?.manaCost}</span>
                </div>
                <p>{cardById?.type}</p>
                <p>{cardById?.text}</p>
                <div className="rarity-power">
                  <div>{cardById?.rarity}</div>
                  <div>
                    {cardById?.power && (
                      <strong>
                        {cardById?.power} / {cardById?.toughness}
                      </strong>
                    )}
                  </div>
                </div>
                <p>{cardById?.setName}</p>

                <div className="artist">
                  #{cardById?.number} Illustrated by {cardById?.artist}
                </div>
                {cardById?.rulings && (
                  <>
                    <p id="rules-title">Rulings:</p>
                    <div className="rulings">
                      {cardById?.rulings.map((rule, i) => {
                        return (
                          <p className="rule" key={i}>
                            - {rule?.text}
                          </p>
                        )
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Skeleton />
        </div>
      )}
    </div>
  )
}

export default Card
