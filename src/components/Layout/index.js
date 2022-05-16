import './styles.css'
import { GrLinkedinOption } from 'react-icons/gr'
import { VscGithub } from 'react-icons/vsc'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'

function LayoutComponent({ children }) {
  return (
    <div className="container">
      <header>
        <div className="header">
          <a href="/">
            <img
              src="https://assets1.mtggoldfish.com/assets/mtggoldfish-website-logo-0a6f6c08669df80f2a1dbc60d365bd090d712b5106927ad5cf7efc3e3449fcfe.png"
              alt="Logo"
            ></img>
          </a>
        </div>
      </header>

      <main>{children}</main>

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
