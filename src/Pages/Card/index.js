import './styles.css'
import { useParams } from 'react-router-dom'

function Card() {
  const { id } = useParams()
  console.log('id ----->', id)

  return (
    <div>
      <div className="titles">
        <h3 id="card-name">NOME DA CARTA</h3>
        <h3>SET DA CARTA</h3>
      </div>
      <div className="card-info">
        {/*BLOCAO COM CARTA E TEXTO*/}
        <div className="card-image-butons">
          <img src="https://cdn1.mtggoldfish.com/images/h/Abbot-of-Keral-Keep-ORI-672.jpg"></img>
          <button>Add to collection</button>
          <button>Create price Alert</button>
        </div>
        <div className="card-info-box">
          <div className="info-box">
            <h3>Abbot of Keral Keep</h3>
            {/* <span>CUSTO DE MANA</span> */}
            <p>Creature — Human Monk</p>
            <p>
              Prowess (Whenever you cast a noncreature spell, this creature gets
              +1/+1 until end of turn.) When Abbot of Keral Keep enters the
              battlefield, exile the top card of your library. Until end of
              turn, you may play that card.
            </p>
            <div className="rarity-power">
              <div>Rare</div>
              <div>
                <strong>2 / 1</strong>
              </div>
            </div>
            <div className="artist">
              #127 Illustrated by Deruchenko Alexander
            </div>
          </div>
        </div>
      </div>
      <h3>Card Id = {id}</h3>
    </div>
  )
}

export default Card
