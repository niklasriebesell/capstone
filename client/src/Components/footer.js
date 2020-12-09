import styled from 'styled-components/macro'
import BackspaceIcon from '@material-ui/icons/Backspace'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'

function Footerdown() {
  return (
    <Footer>
      <div>
        <Button width="50" alt="Back-Icon">
          <BackspaceIcon />
          Back
        </Button>
      </div>
      <Link to="home">
        <Button width="50" alt="Home-Icon">
          <HomeIcon /> Home
        </Button>
      </Link>
    </Footer>
  )
}

const Footer = styled.footer`
  background-color: #da2127;
  border-radius: 25px 25px 0px 0px;
  bottom: 1px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  max-width: 100%;
  padding: 0.5em 1em;
  width: 100%;
`

const Button = styled.button`
  align-items: center;
  background-color: #041e42;
  border: none;
  border-radius: 50px;
  color: #ffffff;
  display: flex;
  font-size: 1.25em;
  line-height: 1.5;
  padding: 0.5em 0.7em;

  svg {
    margin-right: 0.4em;
  }
`
export default Footerdown
