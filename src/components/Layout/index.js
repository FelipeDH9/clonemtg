import './styles.css'

// components
import { ToTopButton } from '../ToTopButton'

// icons
import { GrLinkedinOption } from 'react-icons/gr'
import { VscGithub } from 'react-icons/vsc'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'

function LayoutComponent({ children }) {
  // const { width } = useWindowDimensions()

  return (
    <div className="container">
      <main>{children}</main>
      <ToTopButton />
      <div className="layout-bottom">
        <div className="layout-bottom-content">
          <div className="bottom-social">
            <h3>Contacts</h3>
            <div className="bottom-icons">
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
