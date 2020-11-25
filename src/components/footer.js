import styled from 'styled-components'
import BackspaceIcon from '@material-ui/icons/Backspace'
import HomeIcon from '@material-ui/icons/Home'

function Footerdown() {
  return (
    <Footer>
      <button src={BackspaceIcon} width="50" alt="Back-Icon">
        Back
      </button>
      <button src={HomeIcon} width="50" alt="Home-Icon">
        Home
      </button>
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  display: bottom;
  background-color: #da2127;
  flex-direction: row;
  border-radius: 50;
  justify-content: space-between;
`

export default Footerdown
