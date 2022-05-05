import './styles.css'

function Card(props) {
  return (
    <div className="card">
      <a href={props.url} target="_blank" rel="noreferrer">
        <p>Nome: {props.name}</p>
        <p>Valor de mana: {props.cmc}</p>
        <span>
          <img src={props.url} alt="image" />
        </span>
      </a>
    </div>
  )
}

export default Card

// import './styles.css'

// function Card(props) {
//   return (
//     <div className="card">
//       <img src={props.url} alt="image"  />
//     </div>
//   )
// }

// export default Card
