import './styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCard } from '../../services/magic'

function Card() {
  const { id } = useParams()
  const [cardById, setCardById] = useState()

  async function getCardById() {
    const res = await getCard(id)
    const data = await res.data.card
    setCardById(data)
  }

  useEffect(() => {
    getCardById()
  }, [])

  return (
    cardById && (
      <div>
        <div className="titles">
          <h3 id="card-name">{cardById.name}</h3>
          <h3>{cardById.setName}</h3>
        </div>
        <div className="card-info">
          <div className="card-image-butons">
            <img src={cardById.imageUrl} alt="card"></img>
            <button>Add to collection</button>
            <button>Create price Alert</button>
          </div>
          <div className="card-info-box">
            <div className="info-box">
              <div className="name-cost">
                <h3>{cardById.name}</h3>
                <span>{cardById.manaCost}</span>
              </div>
              <p>{cardById.type}</p>
              <p>{cardById.text}</p>
              <div className="rarity-power">
                <div>{cardById.rarity}</div>
                <div>
                  {cardById.power && (
                    <strong>
                      {cardById.power} / {cardById.toughness}
                    </strong>
                  )}
                </div>
              </div>
              <div className="artist">
                #{cardById.number} Illustrated by {cardById.artist}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Card
