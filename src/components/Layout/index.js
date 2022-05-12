import './styles.css'
import { GoSearch } from 'react-icons/go'
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
          <div className="navBar">
            <form>
              <input
                type="text"
                placeholder="Digite o nome da carta..."
                autoFocus="autofocus"
              ></input>

              <button onClick={() => {}}>
                <GoSearch />
              </button>
            </form>
          </div>
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
          {/* <div className="bottom-links">
            <h3>Tecnologias usadas</h3>
            <ul>
              <li>
                <a
                  href="https://pt-br.reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://reactrouter.com/docs/en/v6/getting-started/overview"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Router v6
                </a>
              </li>
              <li>
                <a
                  href="https://react-icons.github.io/react-icons"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Icons
                </a>
              </li>
              <li>
                <a
                  href="https://axios-http.com/ptbr/docs/intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  Axios
                </a>
              </li>
              <li>
                <a
                  href="https://docs.magicthegathering.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  API das cartas
                </a>
              </li>
              <li>
                <a
                  href="https://www.mtggoldfish.com/q?utf8=%E2%9C%93&query_string="
                  target="_blank"
                  rel="noreferrer"
                >
                  Site original para estudo
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      {/* <div id="footer-message">
        <p>Site recriado com React para fins educativos.</p>
      </div> */}
    </div>
  )
}

export default LayoutComponent
