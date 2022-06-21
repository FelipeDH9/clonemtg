import './styles.css'
import { GrLinkedinOption } from 'react-icons/gr'
import { VscGithub } from 'react-icons/vsc'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { ToTopButton } from '../ToTopButton'
import { FaDiceD20 } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'

function LayoutComponent({ children }) {
  return (
    <div className="container">
      <header>
        <div className="header">
          <a href="/">
            <img
              src={require('../../assets/logos/planeCardsLogo.png')}
              alt="logo"
            />
          </a>
          <nav>
            <a href="/">
              <BiSearchAlt className="searchIcon" />
            </a>
            <a href="/lifecount">
              <FaDiceD20 className="diceIcon" />
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>
      <ToTopButton />
      <div className="layout-bottom">
        <div className="layout-bottom-content">
          <div className="bottom-social">
            <div className="bottom-icons">
              <h3>Contato</h3>
              <a
                href="https://github.com/FelipeDH9"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-d-haddad/"
                target="_blank"
                rel="noreferrer"
              >
                <GrLinkedinOption />
              </a>
              <a href="mailto: felipehaddad25@gmail.com">
                <MdEmail />
              </a>
              <a
                href="https://www.instagram.com/haddad.felipe/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutComponent
