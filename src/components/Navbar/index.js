import './styles.css'
import { NavLink, Link } from 'react-router-dom'

import useWindowDimensions from '../../hooks/useWindowResize'

// icons
import { BiSearchAlt } from 'react-icons/bi'
import { FaDiceD20 } from 'react-icons/fa'

const Navbar = () => {
  const { width } = useWindowDimensions()

  return (
    <header>
      <nav className="header">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        {width <= 767 ? (
          <div>
            <NavLink to="/">
              <BiSearchAlt
                className={({ isActive }) =>
                  isActive ? 'active search-icon' : 'search-icon'
                }
              />
            </NavLink>
            <NavLink to="/lifecount">
              <FaDiceD20
                className={({ isActive }) =>
                  isActive ? 'active dice-icon' : 'dice-icon'
                }
              />
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/">Search Cards</NavLink>
            <NavLink to="/lifecount">Life Counter</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
