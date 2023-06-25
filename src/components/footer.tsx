import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTwitter, faGithub,} from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faGithub)


const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex justify-between items-center mt-20 py-20 border-t">
          <p>©2023 Taishi Endo</p>
          <div className="flex">
            <a
              href="https://twitter.com/endotaishi_"
              className="p-2 mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} width="24" />
            </a>
            <a
              href="https://github.com/EndoTaishi"
              className="p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} width="24" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer