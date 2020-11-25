import styled from 'styled-components'

function Footerdown() {
  return (
    <Footer>
      <button>Back</button>
      <button>Home</button>
    </Footer>
  )
}

const Footer = styled.footer`
  background-color: #da2127;
  flex-direction: row;
  border-radius: 50;
  justify-content: space-between;
`

export default Footerdown
