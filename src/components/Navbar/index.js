import './styles.css'
import { Link } from 'react-router-dom'

import useWindowDimensions from '../../hooks/useWindowResize'

// logo
import PlaneCardsLogo from '../../assets/logos/PlaneCardsLogo.png'

// icons
import { BiSearchAlt } from 'react-icons/bi'
import { FaDiceD20 } from 'react-icons/fa'

const Navbar = () => {
  const { width } = useWindowDimensions()

  return (
    <header>
      <nav className="header">
        <Link to="/">
          <img src={PlaneCardsLogo} alt="logo" />
        </Link>
        {width <= 767 ? (
          <>
            <Link to="/">
              <BiSearchAlt className="searchIcon" />
            </Link>
            <Link to="/lifecount">
              <FaDiceD20 className="diceIcon" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/">Buscar cartas</Link>
            <Link to="/lifecount">Marcador de vidas</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Navbar
