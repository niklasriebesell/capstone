import styled from 'styled-components/macro'
import BackspaceIcon from '@material-ui/icons/Backspace'
import HomeIcon from '@material-ui/icons/Home'

function Footerdown() {
  return (
    <Footer>
      <Button width="50" alt="Back-Icon">
        <BackspaceIcon />
        Back
      </Button>
      <Button width="50" alt="Home-Icon">
        <HomeIcon /> Home
      </Button>
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 1px;
  background-color: #da2127;
  flex-direction: row;
  border-radius: 10px;
  justify-content: space-between;
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  max-width: 100%;
`

const Button = styled.button`
  color: #ffffff;
  background-color: #041e42;
  border-radius: 50px;
  border: 0;
`
export default Footerdown
