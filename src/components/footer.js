import styled from 'styled-components/macro'
import BackspaceIcon from '@material-ui/icons/Backspace'
import HomeIcon from '@material-ui/icons/Home'

function Footerdown() {
  return (
    <Footer>
      <button width="50" alt="Back-Icon">
        <BackspaceIcon />
        Back
      </button>
      <button width="50" alt="Home-Icon">
        <HomeIcon /> Home
      </button>
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 1px;
  background-color: #da2127;
  flex-direction: row;
  border-radius: 50;
  justify-content: space-between;
  width: 100%;
`

export default Footerdown
