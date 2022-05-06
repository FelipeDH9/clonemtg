import './styles.css'
import { useParams } from 'react-router-dom'

// CODE SMELLS
// short commit

function Card() {
  const { id } = useParams()
  console.log('id ----->', id)

  return (
    <div>
      <h1>OUTRA PÁGINA</h1>
      <h3>CardId = {id}</h3>
    </div>
  )
}

export default Card
