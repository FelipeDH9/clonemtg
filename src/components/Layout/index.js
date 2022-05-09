import './styles.css'
import { GoSearch } from 'react-icons/go'

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
            <input
              type="text"
              placeholder="Digite o nome da carta..."
              autoFocus="autofocus"
            ></input>

            <button onClick={() => {}}>
              <GoSearch />
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <div className="layout-bottom">
        <div className="layout-bottom-content">
          <h3>Final da página</h3>
        </div>
      </div>
      <div className="footer">
        <p>Site recriado com React JS para fins educativos.</p>
      </div>
    </div>
  )
}

export default LayoutComponent
