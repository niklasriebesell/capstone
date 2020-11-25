import styled from 'styled-components'
import NFL from '../Assets/NFL.png'
import NBA from '../Assets/NBA.png'
import MLB from '../Assets/MLB.png'

function Headertop() {
  return (
    <Header>
      <H1>Injury-Report</H1>
      <button>Darkmode</button>
      <Ul>
        <li>
          <img src={NFL} width="50" alt="NFL-Icon" />
          NFL
        </li>
        <li>
          <img src={MLB} width="60" alt="MLB-Icon" />
          MLB
        </li>
        <li>
          <img src={NBA} width="30" alt="NBA-Icon" />
          NBA
        </li>
      </Ul>
    </Header>
  )
}

const Header = styled.header`
  background-color: #da2127;
  flex-direction: row;
  border-radius: 50;
  margin: 0px;
`

const H1 = styled.h1`
  color: #ffffff;
  position: center;
`
const Ul = styled.ul`
  list-style-type: none;
  justify-content: space-between;
`

export default Headertop
